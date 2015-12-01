var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('babel', function () {
  return browserify('./public/javascripts/app.js', { debug: true })
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(plumber()) // エラー時にWatchを停止しないためのモジュール
    .pipe((source)('all.js'))
    .pipe(gulp.dest('./target/web/public/main/dist'));
});

gulp.task('watch', function () {
  gulp.watch("./public/javascripts/**/*.js", ['babel']);
});

gulp.task('default', ['babel']);