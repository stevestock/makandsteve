// http://quenchjs.com

var gulp = require('gulp');
var del = require('del');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var path = require('path');

gulp.task('clean', function () {
  del([
    'public/fonts',
    'public/js',
    'public/css',
    'public/img',
    'resources/assets/img'
  ]);
});

// var imgInputPath = path.join('resources', 'assets', 'images');
var imgOptimizePath = path.join('resources', 'assets', 'img');
var imgPublicPath = path.join('public', 'img');

gulp.task('copy-images', function () {
  gulp.src([imgOptimizePath + '/**/*'])
    .pipe(gulp.dest(imgPublicPath, {overwrite: false}));
});

// requires brew install imagemagick graphicsmagick
gulp.task('optimize-images', function () {
  gulp.src([
    'resources/assets/images/*.{jpg,JPG,png}',
    '!resources/assets/images/{heart,footer,BedBath,crateandbarrel,registryleaves,furniture,registrytext}*.png']
  )
    .pipe(imageResize({format: 'jpg'}))
    .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest(imgOptimizePath));

  gulp.src([
    'resources/assets/images/{heart,footer,BedBath,crateandbarrel,registryleaves,furniture,registrytext}*.png'])
    .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest(imgOptimizePath));

  gulp.src(['resources/assets/images/photos/*.{jpg,JPG,png}']
  )
    .pipe(imageResize({format: 'jpg'}))
    .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest(path.join(imgOptimizePath, 'photos')))
    .pipe(imageResize({
      width: 500,
      height: 500,
      crop: true,
      upscale: true
    }))
    .pipe(rename(function (path) {
      path.basename = 'thumb' + path.basename;
    }))
    .pipe(gulp.dest(path.join(imgOptimizePath, 'photos', 'thumbs')));
});
