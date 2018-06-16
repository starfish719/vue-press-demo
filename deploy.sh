#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/starfish719/vue-press-demo.git master:gh-pages

cd -
