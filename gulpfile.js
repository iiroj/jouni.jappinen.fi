var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    base64       = require('gulp-base64'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    shell        = require('gulp-shell')

gulp.task('styles', function() {
  return gulp.src('_styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('_static'))
})

gulp.task('static', ['styles'], function() {
  gulp.src(['_static/*'])
    .pipe(gulp.dest('public'))
  gulp.src(['_media/*'])
    .pipe(gulp.dest('public'))
})

gulp.task('devd', shell.task('devd -ol public/ \ /cv=http://devd.io:8000/cv.html \ /pajanhamarasta=http://devd.io:8000/pajanhamarasta.html'))

gulp.task('watch', function() {
  gulp.watch('_static/*', ['static'])
  gulp.watch('_styles/*.scss', ['static'])
  gulp.watch('_components/*.html', ['components'])
})

gulp.task('default', function() {
  gulp.start('static')
  gulp.start('watch')
  gulp.start('devd')
})