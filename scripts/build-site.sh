#!/bin/bash

# Exit script on error
set -e

# Echo each command before executing it
set -x

# Install dependencies
yarn install

# Run lint checks
yarn lint

# Run tests
yarn test

# Build the project
yarn build
