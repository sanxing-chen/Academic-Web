#!/bin/bash
npx vuepress build
cp -r .vuepress/dist/* /Users/stay/source/sanxing.ai
cd /Users/stay/source/sanxing.ai
git pull
git add -A
git commit -a -m "update"
git push
