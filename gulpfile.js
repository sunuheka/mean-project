var gulp = require('gulp');
var sass = require('gulp-sass');
var neuter = require('gulp-neuter');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload')

gulp.task('sass', function () {
  return gulp.src('./angular/scss/**/*.scss')
    .pipe(sass({
    	includePaths: ['bower_components/foundation/scss']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
  livereload.listen({ basePath: 'public' });
  gulp.watch(['./angular/scss/**/*.scss'], ['sass']);
});

gulp.task('js:watch', function () {
  livereload.listen({ basePath: 'public' });
  gulp.watch(['./angular/js/**/*.js'], [ 'js']);
});

gulp.task('template:watch', function () {
  livereload.listen({ basePath: 'public' });
  gulp.watch(['./public/templates/**/*.html'], ['reload']);
});

gulp.task('js', function() {
	return gulp.src('./angular/js/main.js')
		.pipe(neuter('main.js', 'main.map', {}))
		.pipe(gulp.dest('./public/javascripts'))
		.pipe(livereload());
});

gulp.task('reload', function(){
  livereload();
})

gulp.task('server', function(){
	nodemon({
		script: './bin/www', 
		watch: ['routes', 'models', 'app.js'] 
	})
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', ['sass', 'js', 'sass:watch', 'js:watch','template:watch', 'server'])