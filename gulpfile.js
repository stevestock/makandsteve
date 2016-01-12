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
		"./bower_components/nivo-lightbox/nivo-lightbox.css",
		"./bower_components/nivo-lightbox/themes/default/default.css",
		"./bower_components/outdated-browser/outdatedbrowser/outdatedbrowser.min.css",
		"./bower_components/leaflet/dist/leaflet.css"
       ], 'public/css/vendor.css')
	   
	   .copy('./bower_components/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts/bootstrap')
	   .copy('./resources/assets/fonts/Wisdom Script AJ.ttf', 'public/fonts')
	   .copy('./bower_components/nivo-lightbox/themes/default/*.{png,gif}', 'public/css')
	   .scripts([
           "./bower_components/nivo-lightbox/nivo-lightbox.min.js",
		   "./bower_components/countdownjs/countdown.min.js",
		   "./bower_components/lodash/lodash.min.js",
		   "./bower_components/leaflet/dist/leaflet.js",
		   "./bower_components/outdated-browser/outdatedbrowser/outdatedbrowser.min.js",
		   "./bower_components/retina.js/dist/retina.min.js"
       ], 'public/js/vendor.js')
	   .scripts(['main.js'], 'public/js/main.js')
	   .copy('./bower_components/html5shiv/dist/html5shiv.min.js', 'public/js/html5shiv.min.js')
	   .copy('./bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.min.js')
	   .copy('./bower_components/jquery/dist/jquery.min.map', 'public/js/jquery.min.map')
	   .copy('./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'public/js/bootstrap.min.js')
	   .copy('./resources/assets/images/heart.png', './public/img/heart.png')
	   .copy('./resources/assets/images/heart@2x.png', './public/img/heart@2x.png')
	   .copy('./resources/assets/images/footer.png', './public/img/footer.png')
	   .copy('./resources/assets/images/footer@2x.png', './public/img/footer@2x.png');
});

gulp.task('clean', function() {
    del([
		'./public/fonts',
	    './public/js',
		'./public/css',
		'./public/img/photos'
    ]);
});

gulp.task('images', function(){
  gulp.src(['./resources/assets/images/*.{jpg,JPG,png}', '!./resources/assets/images/heart*.png', '!./resources/assets/images/footer*.png'])
    .pipe(imageResize({format : 'jpg'}))
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('./public/img/'))
});

gulp.task('photos', function(){
  gulp.src('./resources/assets/images/photos/*.{jpg,JPG,png}')
    .pipe(imageResize({format : 'jpg'}))
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('./public/img/photos/'))
    .pipe(imageResize({
        width : 600,
        height : 600,
        crop : true,
        upscale : false
    }))
    .pipe(gulp.dest('./public/img/photos/thumbs/'));
});