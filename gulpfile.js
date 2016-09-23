'use strict'

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const stylus = require('gulp-stylus')
const pug = require('gulp-pug')
const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer')

/*!
 * Development tasks
 */

gulp.task('server', function () {
  gulp
    .src('./public')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true,
      directoryListing: {
        enabled: true,
        path: 'public'
      }
    }))
})

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.styl', ['debug:css'])
  gulp.watch('src/javascript/**/*.js', ['debug:javascript'])
  gulp.watch('src/views/**/*.pug', ['debug:html'])
})

gulp.task('debug:javascript', function () {
  gulp
    .src(['src/javascript/app.js'])
    .pipe(gulp.dest('public/javascript'))
})

gulp.task('debug:images', function () {
  gulp
    .src(['src/images/**/*.*'])
    .pipe(gulp.dest('public/images'))
})

gulp.task('debug:css', function () {
  gulp
    .src(['src/styles/main.styl'])
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('public/css'))
})

gulp.task('debug:html', function () {
  gulp
    .src(['src/views/index.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('public'))
})


gulp.task('debug:fonts', function () {
  gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('public/fonts/'))
})

/*!
 * Production tasks
 */

gulp.task('dist:javascript', function () {
  gulp
    .src(['src/javascript/app.js'])
    .pipe(uglify())
    .pipe(gulp.dest('public/javascript'))
})

gulp.task('dist:images', function (cb) {
  gulp
    .src('src/images/**/*.')
    .pipe(gulp.dest('public/images/'))
})

gulp.task('dist:css', function () {
  gulp
    .src(['src/styles/main.styl'])
    .pipe(stylus({
      compress: true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('public/css'));
})

gulp.task('dist:html', function () {
  gulp
    .src(['src/views/index.pug'])
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('dist:fonts', function () {
  gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('public/fonts/'))
})

/*!
 * Github tasks
 */

gulp.task('gh:javascript', function () {
  gulp
    .src(['src/javascript/app.js'])
    .pipe(uglify())
    .pipe(gulp.dest('docs/javascript'))
})

gulp.task('gh:images', function () {
  gulp
    .src('src/images/**/*.*')
    .pipe(gulp.dest('public/images/'))
})

gulp.task('gh:css', function () {
  gulp
    .src(['src/styles/main.styl'])
    .pipe(stylus({
      compress: true,
      user: [autoprefixer()]
    }))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('gh:html', function () {
  gulp
    .src(['src/views/index.pug'])
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('gh:fonts', function () {
  gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('docs/fonts/'))
})

gulp.task('default', ['server', 'debug:javascript', 'debug:css', 'debug:html', 'debug:images', 'debug:fonts', 'watch'])
gulp.task('github', ['gh:javascript', 'gh:images', 'gh:css', 'gh:html', 'gh:fonts'])
gulp.task('build', ['dist:javascript', 'dist:css', 'dist:html', 'dist:images', 'dist:fonts'])
