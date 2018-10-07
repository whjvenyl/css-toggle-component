#!/bin/sh
rm -Rf dist/*
npm run build
mkdir /tmp/css-toggle-component
cp -R dist/* /tmp/css-toggle-component
git checkout gh-pages
rm -Rf ./public ./scripts ./dist ./index.js ./README.MD
cp -R /tmp/css-toggle-component/* ./
git add .
git commit -m "Publishing docs for $(git describe --tags)"
git push origin gh-pages
git checkout master
