var elixir = require('laravel-elixir');
var gulp = require('gulp');
var del = require('del');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');

/*
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your Laravel application. By default, we are compiling the Sass
| file for our application, as well as publishing vendor resources.
|
*/

elixir(function(mix) {
  mix.sass(['makandsteve.scss'], 'public/css/main.css')
  .styles([
    './bower_components/nivo-lightbox/nivo-lightbox.css',
    './bower_components/nivo-lightbox/themes/default/default.css',
    './bower_components/outdated-browser/outdatedbrowser/outdatedbrowser.min.css',
    './bower_components/leaflet/dist/leaflet.css',
    './public/css/main.css'
  ], 'public/css/main.css')
  .copy('bower_components/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts/bootstrap')
  .copy('resources/assets/fonts/Wisdom Script AJ.ttf', 'public/fonts')
  .copy('bower_components/nivo-lightbox/themes/default/*.{png,gif}', 'public/css')
  .scripts([
    'nivo-lightbox/nivo-lightbox.min.js',
    'countdownjs/countdown.min.js',
    'lodash/dist/lodash.min.js',
    'leaflet/dist/leaflet.js',
    'outdated-browser/outdatedbrowser/outdatedbrowser.min.js',
    'retina.js/dist/retina.min.js'
  ], 'public/js/vendor.js', 'bower_components')
  .scripts(['main.js'], 'public/js/main.js')
  .copy('bower_components/html5shiv/dist/html5shiv.min.js', 'public/js')
  .copy('bower_components/jquery/dist/jquery.min.js', 'public/js')
  .copy('bower_components/jquery/dist/jquery.min.map', 'public/js')
  .copy('bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'public/js')
});

gulp.task('clean', function() {
  del([
    'public/fonts',
    'public/js',
    'public/css',
    'public/img'
  ]);
});

gulp.task('img', function() {
  gulp.src([
    'resources/assets/images/*.{jpg,JPG,png}',
    '!resources/assets/images/{heart,footer,BedBath,crateandbarrel,registryleaves,furniture,registrytext}*.png'])
    .pipe(imageResize({format : 'jpg'}))
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('./public/img/'))

    gulp.src([
      'resources/assets/images/{heart,footer,BedBath,crateandbarrel,registryleaves,furniture,registrytext}*.png'])
      .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
      .pipe(gulp.dest('./public/img/'))

      gulp.src([
        'resources/assets/images/photos/*.{jpg,JPG,png}',
        '!resources/assets/images/photos/5.{jpg,JPG,png}']
      )
      .pipe(imageResize({format : 'jpg'}))
      .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
      .pipe(gulp.dest('public/img/photos/'))
      .pipe(imageResize({
        width : 600,
        height : 600,
        crop : true,
        upscale : false
      }))
      .pipe(gulp.dest('public/img/photos/thumbs/'))

      gulp.src('resources/assets/images/photos/5.{jpg,JPG,png}')
      .pipe(imageResize({format : 'jpg'}))
      .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
      .pipe(gulp.dest('public/img/photos/'))
      .pipe(imageResize({
        width : 300,
        height : 300,
        crop : true,
        upscale : false
      }))
      .pipe(gulp.dest('public/img/photos/thumbs/'));
    });
