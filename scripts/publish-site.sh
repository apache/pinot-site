# #!/bin/bash

# set -x -e

# # Define variables
# DEPLOY_BRANCH="new-static-prod"
# ORIGIN_REPO="https://github.com/gio-startree/pinot-site" # The TEST repository to deploy to
# ROOT_DIR=$(git rev-parse --show-toplevel)
# DEV_BRANCH="new-site-dev"
# BUILD_DIR="/tmp/pinot-new-site-build"
# SITE_DIR="$ROOT_DIR/out" # Adjust if your build output directory is different

# echo "Starting deployment process..."
# echo "ORIGIN_REPO: $ORIGIN_REPO"

# # Step 1: Cleanup any previous build artifacts
# rm -rf $BUILD_DIR
# mkdir -p $BUILD_DIR

# # Step 2: Clone the repo and switch to the development branch
# git clone "$ORIGIN_REPO" $BUILD_DIR
# cd $BUILD_DIR
# git checkout $DEV_BRANCH

# # Step 3: Capture commit ID and message for use in the deployment commit
# COMMIT_ID=$(git rev-parse HEAD)
# GIT_MSG=$(git log -1 --pretty=format:"%s")

# echo "Building the project..."
# # Step 4: Build the website
# # Ensure Yarn is installed or install it if needed
# yarn install
# yarn run build

# # Debugging: List contents after build
# echo "Listing contents of build output directory..."
# ls -l $BUILD_DIR/out

# # Ensure the directory exists and has content
# if [ -d "$BUILD_DIR/out" ] && [ "$(ls -A $BUILD_DIR/out)" ]; then
#     echo "Directory exists and is not empty, proceeding with copy..."
#     # Use a more explicit approach to copy files
#     # This changes into the directory to avoid globbing issues
#     cd $BUILD_DIR/out
#     # Now copy all files and directories to the target, using . to refer to the current directory context
#     cp -r . $ROOT_DIR
#     cd - # Go back to the previous directory
# else
#     echo "Build output directory does not exist or is empty, exiting..."
#     exit 1
# fi

# # Step 5: Prepare the new-static-prod branch for the new build
# git fetch origin $DEPLOY_BRANCH:$DEPLOY_BRANCH
# git checkout $DEPLOY_BRANCH

# # Step 6: Replace old files with new build
# # Be careful with the following command; ensure you're only removing what you intend to
# git rm -rf .
# cp -r $SITE_DIR/* .

# # Step 7: Commit and push changes
# git add .
# git config user.name "Pinot Site Updater"
# git config user.email "dev@pinot.apache.org"
# git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
# git push origin $DEPLOY_BRANCH

# echo "Deployment to ${DEPLOY_BRANCH} completed successfully."










#!/bin/bash

set -x -e

# Define variables
DEPLOY_BRANCH="new-static-prod"
ORIGIN_REPO="https://github.com/gio-startree/pinot-site"
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

# Commit and push changes
git add .
git config user.name "Pinot Site Updater"
git config user.email "dev@pinot.apache.org"
# git config user.name "Gio"
# git config user.email "gio@startree.ai"
git config http.https://github.com/.extraheader "AUTHORIZATION: bearer ${GITHUB_TOKEN}"

git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
git push origin $DEPLOY_BRANCH

echo "Deployment to ${DEPLOY_BRANCH} completed successfully."








# set -x -e
# ls -lrth
# DEPLOY_BRANCH="new-static-prod"
# ROOT_DIR=$(git rev-parse --show-toplevel)
# SITE_DIR=${ROOT_DIR}
# git branch

# # Build website
# # ORIGIN_REPO="https://github.com/apache/incubator-pinot-site"
# ORIGIN_REPO="https://github.com/gio-startree/pinot-site" # The TEST repository to deploy to
# echo "ORIGIN_REPO: $ORIGIN_REPO"

# DEV_TMP=/tmp/pinot-new-site-dev
# rm -rf $DEV_TMP
# mkdir $DEV_TMP
# cd $DEV_TMP

# git clone "$ORIGIN_REPO" .
# git checkout new-site-dev
# COMMIT_ID=`git rev-parse HEAD`
# GIT_MSG=`git rev-list --pretty --max-count=2 ${COMMIT_ID}`
# cd ${DEV_TMP}
# # npm install yarn
# yarn
# yarn run build

# cd ${ROOT_DIR}

# git status

# # rm -rf ${SITE_DIR}/assets
# ## copy generated site
# cp -r ${DEV_TMP}/out/* ${SITE_DIR}/

# git status
# git add .
# git status

# git config user.name "Pinot Site Updater"
# git config user.email "dev@pinot.apache.org"
# git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
# git log -2
# # git push origin asf-site
# git push origin $DEPLOY_BRANCH

# echo "Deployment to ${DEPLOY_BRANCH} completed successfully."
