#!/bin/bash
NODE_OPTIONS=--openssl-legacy-provider npx vuepress build
# Remove contents but preserve .git, CNAME, and .gitignore files
cd /Users/stay/source/sanxing.ai
git pull
find . -mindepth 1 -maxdepth 1 ! -name '.git' ! -name 'CNAME' ! -name '.gitignore' -exec rm -rf {} +
cd -
cp -r .vuepress/dist/* /Users/stay/source/sanxing.ai
cd /Users/stay/source/sanxing.ai
git add -A
git commit -a -m "update"
git push
