#!/usr/bin/env bash

set -e

error() {
  echo "🚨 $1"
  exit 1
}

if [ $# != 1 ]; then
  error "Please specify name of version update (ie patch) patch|minor|major"
fi

VERSION_PARAM=$1
BRANCH=$(git rev-parse --abbrev-ref HEAD)

change_version() {
  NEW_VERSION=$(npm version "${VERSION_PARAM}")
  echo "::set-output name=tagName::${NEW_VERSION}"
}

verify_main_branch() {
  if [ ${BRANCH} != 'main' ]; then
    error "Invalid branch name ${BRANCH}"
  fi
}

verify_uncommitted_changes() {
  if [ $(git status --porcelain) ]; then
    git status
    error "There are uncommitted changes in the working tree."
  fi
}

publish() {
  npm publish --access public
  git push --tags
}

verify_uncommitted_changes
verify_main_branch
change_version
publish
