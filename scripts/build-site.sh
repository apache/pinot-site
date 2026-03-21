#!/bin/bash

# Exit script on error
set -e

# Echo each command before executing it
set -x

# Install dependencies
yarn install

# Run lint checks (without --fix so CI catches errors instead of silently fixing them)
yarn lint:check

# Run tests
yarn test

# Build the project
yarn build
