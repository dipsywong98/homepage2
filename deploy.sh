mv -r dist/.git/ __tmp/.git/
npm run build
mv -r __tmp/.git/ dist/.git/
rm -r __tmp/

cd dist || echo "not build found" || exit


git add .
git commit -am "deploy"
git push -fu origin master
