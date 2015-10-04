/**
 * Created by admin on 14.09.2015.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function () {
    gulp.src('./less/**/*.less')
        .pipe(concat('styles.less'))
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('images', function () {
    gulp.src('./img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', function() {
        gulp.run('css');
    });
    gulp.watch('./img/**/*', function() {
        gulp.run('images');
    });
    gulp.watch('./js/**', function() {
        gulp.run('js');
    });
});

gulp.task('build', function () {
    gulp.run('js');
    gulp.run('css');
    gulp.run('images');
});