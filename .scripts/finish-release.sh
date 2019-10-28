#!/usr/bin/env bash

set -eu

function error {
  echo "#----------------------------"
  echo "# ERROR: $1"
  echo "#----------------------------\n"
  exit 1
}

if [ $# != 1 ]; then
  error "Please specify the version number: npm run finish-release 10.0.1"
fi

npm run lint
npm run test
npm run dist

NEW_VERSION=$1
BRANCH=`git rev-parse --abbrev-ref HEAD`

function change_version {
  npm version ${NEW_VERSION}
}

function check_branch {
  if [ ${BRANCH} == 'master' ]; then
      echo "Master branch"
  else
    error "Invalid branch name ${BRANCH}"
   fi
}

function exists_tag {
  if git rev-parse v${NEW_VERSION} >/dev/null 2>&1; then
    echo "Found tag"
  else
    error "Tag not found"
  fi
}

function uncommitted_changes {
  if [[ `git status --porcelain` ]]; then
    error "There are uncommitted changes in the working tree."
  fi
}

function publish {
  npm publish --access public
}

function gitPush {
  git push && git push --tags
}


function generate_release_notes {
  npx gren release --username=raulanatol --repo=react-inline-loaders
}

uncommitted_changes
check_branch
change_version
exists_tag
publish
gitPush
generate_release_notes


