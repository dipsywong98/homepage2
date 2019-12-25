npm run build

cd dist || echo "not build found" || exit

git init
git remote add origin git@github.com:dipsywong98/homepage2.git
git checkout -b gh-pages
git add .
git commit -am "deploy"
git push -fu origin gh-pages
