const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const rename       = require('gulp-rename');
const webserver    = require('gulp-webserver');

gulp.task('styles', function() {
  return gulp.src('_styles/*')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('_static'));
});

gulp.task('static', ['styles'], function() {
  gulp.src(['_static/*'])
    .pipe(gulp.dest('public'));
  gulp.src(['_media/*'])
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('_static/*', ['static']);
  gulp.watch('_styles/*.scss', ['static']);
});

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      directoryListing: false,
      fallback: 'index.html',
      host: 'localhost',
      livereload: true,
      open: true,
      port: 8080
    }));
});

gulp.task('default', function() {
  gulp.start('static');
  gulp.start('watch');
  gulp.start('webserver');
});