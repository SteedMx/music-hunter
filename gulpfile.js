'use strict'

var Gulp = require('gulp')
var Htmlmin = require('gulp-htmlmin')
var Stylus = require('gulp-stylus')
var Webserver = require('gulp-webserver')
var Autoprefixer = require('gulp-autoprefixer')
var Imageop = require('gulp-image-optimization')

/*!
 * Development tasks
 */

Gulp.task('dev:server', function () {
  return Gulp
    .src('build')
    .pipe(Webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      directoryListing: {
        enabled: true,
        path: 'build'
      }
    }))
})

Gulp.task('dev:images', function () {
  return Gulp
    .src(['src/images/*.png'])
    .pipe(Gulp.dest('build/images'));
})

Gulp.task('dev:css', function () {
  return Gulp
    .src('src/styles/main.styl')
    .pipe(Stylus({ compress: false }))
    .pipe(Gulp.dest('build/css/'))
})

Gulp.task('dev:html', function () {
  return Gulp
    .src('src/index.html')
    .pipe(Gulp.dest('build/'))
})

Gulp.task('watch', function () {
  Gulp.watch('src/styles/**/*.styl', ['dev:css'])
  Gulp.watch('src/index.html', ['dev:html'])
})

/*!
 * Production tasks
 */

Gulp.task('build:css', function () {
  return Gulp
    .src('source/styles/main.styl')
    .pipe(Stylus({ compress: true }))
    .pipe(Autoprefixer())
    .pipe(Gulp.dest('build/css/'))
})

Gulp.task('build:html', function() {
  return Gulp.src('src/index.html')
    .pipe(Htmlmin({ collapseWhitespace: true }))
    .pipe(Gulp.dest('build'))
})

Gulp.task('build:images', function () {
  return Gulp
    .src(['src/images/*.png'])
    .pipe(Imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(Gulp.dest('build/images'));
})

/*!
 * Run this shit out
 */

Gulp.task('default', [ 'dev:html', 'dev:css', 'dev:server', 'dev:images', 'watch' ])
Gulp.task('build', [ 'build:html', 'build:css', 'build:images' ])

