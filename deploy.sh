
#!/usr/bin/env sh
git add .
git commit -m 'deploy'
git push -f git@github.com:ReevesSunset/vue-pwa.git master:gh-pages
git push -f https://github.com/ReevesSunset/vue-pwa.git master
