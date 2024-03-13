# #!/bin/bash
# set -e  # Exit on error
# set -x  # Print commands as they are executed

# # Define variables
# ROOT_DIR=$(git rev-parse --show-toplevel)
# BUILD_DIR="$ROOT_DIR/out"
# DEPLOY_BRANCH="test-prod"
# ORIGIN_REPO="https://github.com/gio-startree/pinot-site" # The TEST repository to deploy to

# # Ensure the script is run from the new-site-dev branch
# CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
# if [ "$CURRENT_BRANCH" != "new-site-dev" ]; then
#   echo "This script should be run from the 'new-site-dev' branch."
#   exit 1
# fi

# # Install dependencies and build the project
# yarn install
# yarn build

# # Ensure the BUILD_DIR exists
# if [ ! -d "$BUILD_DIR" ]; then
#     echo "Build directory does not exist. Make sure 'yarn build' has been run successfully."
#     exit 1
# fi

# # Clone and prepare the deployment branch
# DEPLOY_DIR=$(mktemp -d)
# echo "Using temporary directory: $DEPLOY_DIR"
# git clone "$ORIGIN_REPO" "$DEPLOY_DIR"
# cd "$DEPLOY_DIR"
# git checkout "$DEPLOY_BRANCH" || git checkout --orphan "$DEPLOY_BRANCH"


# # Ensure we are in a git repository
# if [ ! -d ".git" ]; then
#     echo "Error: .git directory not found, ensure the repository was cloned correctly."
#     exit 1
# fi

# # Clean current deployment branch's contents, except for the .git directory
# find . -mindepth 1 -not -name '.git' -exec rm -rf {} +

# # Copy build artifacts to the current directory, preserving attributes
# cp -a "$BUILD_DIR"/. .

# # Commit and push changes
# git add .
# git commit -m "Deploy updated site version"
# git push origin $DEPLOY_BRANCH

# echo "Deployment to ${DEPLOY_BRANCH} completed successfully."

set -x -e
ls -lrth
DEPLOY_BRANCH="test-prod"
ROOT_DIR=$(git rev-parse --show-toplevel)
SITE_DIR=${ROOT_DIR}
git branch

# Build website
ORIGIN_REPO="https://github.com/apache/incubator-pinot-site"
echo "ORIGIN_REPO: $ORIGIN_REPO"

DEV_TMP=/tmp/pinot-new-site-dev
rm -rf $DEV_TMP
mkdir $DEV_TMP
cd $DEV_TMP

git clone "$ORIGIN_REPO" .
git checkout new-site-dev
COMMIT_ID=`git rev-parse HEAD`
GIT_MSG=`git rev-list --pretty --max-count=2 ${COMMIT_ID}`
cd ${DEV_TMP}
npm install yarn
yarn install
yarn run build

cd ${ROOT_DIR}

git status

# rm -rf ${SITE_DIR}/assets
## copy generated site
cp -r ${DEV_TMP}/out/* ${SITE_DIR}/

git status
git add .
git status

git config user.name "Pinot Site Updater"
git config user.email "dev@pinot.apache.org"
git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
git log -2
# git push origin asf-site
git push origin $DEPLOY_BRANCH

echo "Deployment to ${DEPLOY_BRANCH} completed successfully."
