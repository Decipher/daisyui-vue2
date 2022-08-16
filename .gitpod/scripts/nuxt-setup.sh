#!/usr/bin/env bash

# Set up Druxt for use on gitpod

set -eu -o pipefail

NUXT_DIR="${GITPOD_REPO_ROOT}/examples/nuxt"

# Set up Nuxt
cd "$DRUXT_DIR" && yarn
