#!/bin/bash
cd .vuepress/dist
tar -zcvf /tmp/dist.tar.gz ./*
scp /tmp/dist.tar.gz sc3hn@portal.cs.virginia.edu:/tmp/ 
ssh -t sc3hn@portal.cs.virginia.edu 'tar -C ~/public_html -xvzf /tmp/dist.tar.gz'