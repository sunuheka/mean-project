var gulp = require('gulp');
var sass = require('gulp-sass');
var neuter = require('gulp-neuter');

gulp.task('sass', function () {
  return gulp.src('./angular/scss/**/*.scss')
    .pipe(sass({
    	includePaths: ['bower_components/foundation/scss']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./angular/scss/**/*.scss', ['sass']);
});

gulp.task('js', function() {
	return gulp.src('./angular/js/main.js')
		.pipe(neuter('main.js', 'main.map', {}))
		.pipe(gulp.dest('./public/javascripts'));
});