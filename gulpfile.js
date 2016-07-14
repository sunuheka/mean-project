var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./angular/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./angular/scss/**/*.scss', ['sass']);
});