const gulp    = require('gulp');
const jshint  = require('gulp-jshint');
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const plumber = require('gulp-plumber');

gulp.task('default', function() {
	console.log('Use the following commands');
	console.log('--------------------------');
	console.log('gulp compile-js     to compile the js to min.js');
	console.log('gulp watch          to continue watching the files for changes');
});

gulp.task('js', function() {
	return gulp.src('jquery.slideandswipe.js')
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(jshint())
		.pipe(concat('jquery.slideandswipe.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(''))
});

gulp.task('compile-js', ['js']);

gulp.task('watch-js', function () {
	return gulp.watch('assets/js/src/**/*.js', ['compile-js']);
});

gulp.task('watch', ['watch-js']);
