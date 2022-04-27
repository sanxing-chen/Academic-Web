#!/bin/bash
npx vuepress build
cd .vuepress/dist
tar -zcvf /tmp/dist.tar.gz ./*
scp /tmp/dist.tar.gz myazure:/tmp/ 
ssh -t myazure 'tar -C ~/www -xvzf /tmp/dist.tar.gz'