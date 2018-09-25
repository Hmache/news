'use strict';

/* dependencies */
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var changed = require('gulp-changed');

/* SCSS/CSS */
var SCSS_SRC = './src/assets/scss';
var SCSS_DEST = './src/assets/css';

/* compile SCSS into css */
gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC + '/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(changed(SCSS_DEST))
      .pipe(gulp.dest(SCSS_DEST));
})

/* detect changes in SCSS */
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC + '/*.scss', ['compile_scss']);
  gulp.watch(SCSS_SRC + '/**/*.scss', ['compile_scss']);
});

/* Run Tasks */
gulp.task('default', ['watch_scss']);
