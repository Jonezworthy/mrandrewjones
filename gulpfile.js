var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');  


gulp.task('watchSass', function () {
    gulp.watch('assets/sass/*.*', ['compileSass']);
});
gulp.task('compileSass', function () {
    return gulp.src('assets/sass/styles.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('assets/css/'));
});
gulp.task('watchJs', function(){
    gulp.watch('assets/js/ng/*.js', ['compileJs']);
});

gulp.task('compileJs', function(cb){
  return gulp.src('assets/js/ng/*.js')
        .pipe(concat('ng-app.js'))
        .pipe(gulp.dest('assets/js/'));
});


gulp.task('default', ['watchSass', 'watchJs', 'compileSass', 'compileJs']);
gulp.task('build', ['compileSass', 'compileJs']);