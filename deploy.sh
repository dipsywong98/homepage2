npm run build

cd dist || echo "not build found" || exit

git add .
git commit -am "deploy"
git push
