#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
#echo 'ljudio.annamariaeriksson.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git remote add websites https://ljudio.scm.gear.host/Ljudio.git
git push websites master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 #git push -f git@github.com:annamariaeriksson/ljudio.git master

cd -