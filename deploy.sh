mkdir __tmp
if [ ! -d 'dist/' ]; then
  echo 'dist/ not exist, create dist/'
  mkdir dist
fi
if [ ! -d 'dist/.git/' ]; then
  echo 'dist is not a git repo. Initializing it as a git repo'
  REMOTE=$(git remote get-url origin)
  cd dist
  git init
  git remote add origin "$REMOTE"
  cd ..
fi

mv dist/.git/ __tmp/.git/ &&
npm run build &&
mv __tmp/.git/ dist/.git/ &&
rm -r __tmp/ || echo "move or build fail" || exit

cd dist || echo "not build found" || exit

git add .
git commit -am "deploy"
git push -fu origin master
