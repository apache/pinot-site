
#!/bin/bash

set -x -e

# Define variables
DEPLOY_BRANCH="new-static-prod"
ORIGIN_REPO="https://github.com/apache/pinot-site"
DEV_BRANCH="new-site-dev"
BUILD_DIR="/tmp/pinot-new-site-build"
TEMP_DIR="/tmp/pinot-temp"

echo "Starting deployment process..."
echo "ORIGIN_REPO: $ORIGIN_REPO"

# Cleanup any previous build artifacts and prepare build directory
rm -rf $BUILD_DIR
mkdir -p $BUILD_DIR

# Setup: Ensure temp directory exists
mkdir -p $TEMP_DIR

# Clone the repo and switch to the development branch
git clone "$ORIGIN_REPO" $BUILD_DIR
cd $BUILD_DIR
git checkout $DEV_BRANCH

# Preserve .gitignore and any other critical files
if [ -f .gitignore ]; then
    mv .gitignore $TEMP_DIR/
fi

# Capture commit ID and message for use in the deployment commit
COMMIT_ID=$(git rev-parse HEAD)
GIT_MSG=$(git log -1 --pretty=format:"%s")

echo "Building the project..."
# Build the website
yarn install
yarn run build

# Debugging: List contents after build
echo "Listing contents of build output directory..."
ls -l $BUILD_DIR/out

# Verify build directory exists and has content
if [ -d "$BUILD_DIR/out" ] && [ "$(ls -A $BUILD_DIR/out)" ]; then
    echo "Directory exists and is not empty, proceeding with copying..."
else
    echo "Build output directory does not exist or is empty, exiting..."
    exit 1
fi

# Prepare the new-static-prod branch for the new build
git fetch origin $DEPLOY_BRANCH:$DEPLOY_BRANCH
git checkout $DEPLOY_BRANCH

# Replace old files with new build
git rm -rf .

# Restore .gitignore
if [ -f "$TEMP_DIR/.gitignore" ]; then
    mv $TEMP_DIR/.gitignore .
fi

cp -r $BUILD_DIR/out/* .

# Config git
git config user.name "Pinot Site Updater"
git config user.email "dev@pinot.apache.org"
git config --global url.https://$GH_ACCESS_TOKEN@github.com/.insteadOf https://github.com/

# Commit and push changes
git add .
git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
git push origin $DEPLOY_BRANCH

echo "Deployment to ${DEPLOY_BRANCH} completed successfully."
