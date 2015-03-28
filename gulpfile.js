// Load plugins
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    del = require('del');

// Styles
gulp.task('styles', function() {
  return gulp.src('styles/main.styl')
    .pipe(stylus({ use: nib(),  import: ['nib']}))
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public'))
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

// Watch
gulp.task('watch', function() {
  gulp.watch('styles/**/*.styl', ['styles']);
});
