mkdir __tmp
if [ ! -d "dist/"]; then
  git remote get-url origin > $REMOTE
  mkdir dist
  cd dist
  git init
  git remote add origin $REMOTE
  cd ..
fi
mv dist/.git/ __tmp/.git/
npm run build
mv __tmp/.git/ dist/.git/
rm -r __tmp/

cd dist || echo "not build found" || exit

git add .
git commit -am "deploy"
#git push -fu origin master
