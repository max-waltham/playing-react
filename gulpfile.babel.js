var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
//var concat = require("gulp-concat");
var sourceMaps = require("gulp-sourcemaps");
/* ソースマップを出力させる場合 */

gulp.task('babel', function () {
  return gulp.src("./public/javascripts/**/*.js")
    .pipe(plumber()) // エラー時にWatchを停止しないためのモジュール
    .pipe(sourceMaps.init()) // ソースマップを出力させる場合(Debug) */
    .pipe(babel({ presets: ['es2015', 'react']})) // ES6, JSX 変換
    //.pipe(concat('all.js'))
    .pipe(sourceMaps.write(".")) // ソースマップを出力させる場合 */
    .pipe(gulp.dest('./target/web/public/main/dist'));
});

gulp.task('watch', function () {
  gulp.watch("./public/javascripts/**/*.js", ['babel']);
});

gulp.task('default', ['babel']);