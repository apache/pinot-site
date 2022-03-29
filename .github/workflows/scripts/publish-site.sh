#!/bin/bash
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

set -x -e
ls -lrth
ROOT_DIR=$(git rev-parse --show-toplevel)
SITE_DIR=${ROOT_DIR}
git branch

# Build website
ORIGIN_REPO="https://github.com/apache/incubator-pinot-site"
echo "ORIGIN_REPO: $ORIGIN_REPO"

DEV_TMP=/tmp/pinot-site-dev
rm -rf $DEV_TMP
mkdir $DEV_TMP
cd $DEV_TMP

git clone "$ORIGIN_REPO" .
git checkout dev
COMMIT_ID=`git rev-parse HEAD`
GIT_MSG=`git rev-list --pretty --max-count=2 ${COMMIT_ID}`
cd ${DEV_TMP}/website
npm install yarn
yarn install
yarn run build

cd ${ROOT_DIR}

git status

rm -rf ${SITE_DIR}/assets
## copy generated site
mv ${DEV_TMP}/website/build/* ${SITE_DIR}/

git status
git add .
git status

git config user.name "Pinot Site Updater"
git config user.email "dev@pinot.apache.org"
git commit -m "Update Pinot Site from dev branch ${COMMIT_ID}" -m "$GIT_MSG"
git log -2
git push origin asf-site
