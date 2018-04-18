# MakandSteve
Makenzie and Steven's Wedding Website http://www.makandsteve.com

### Team
* Steven Stockhamer (stevestock) -- Developer -- @TheStevestock
* Makenzie Stockhamer   -- Designer  -- @babehamer

### Special Thanks
* Zach Williams (zawilliams)

### Technology
* HTML5, CSS3
* [Twitter Bootstrap](http://getbootstrap.com) - modern front-end UI framework
* [jQuery](https://jquery.com) - javascript framework
* [Countdown.js](http://countdownjs.org) - accurate, intuitive jQuery countdown plugin
* [Leaflet](http://leafletjs.com) - mobile-friendly interactive maps
* [Outdated Browser](http://outdatedbrowser.com/)
* [lodash](https://lodash.com) - modern JavaScript utility library
* [retina.js](http://imulus.github.io/retinajs/)
* [Gulp](http://gulpjs.com) - the streaming build system
* [yarn](https://yarnpkg.com/en/) - JavaScript package manager
* [webpack](https://webpack.js.org) - asset bundler

### Installation

On Mac:

```sh
$ git clone https://github.com/stevestock/makandsteve
$ cd makandsteve
$ brew install n yarn graphicsmagick
$ sudo n latest
$ yarn install
$ yarn build-production
```

### Push to Website

If you rebased, you may need to delete the gh-pages branch if rebased

```sh
$ git push origin :gh-pages
```

Push latest

```sh
$ git subtree push --prefix public origin gh-pages
```