npm run build

cd dist || echo "no build found" || exit

git add .
git commit -am "deploy"
git push -fu origin master
