var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
//var concat = require("gulp-concat");
var react = require('gulp-react');
var sourcemaps = require("gulp-sourcemaps"); /* ソースマップを出力させる場合 */
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('babel', function () {
  // return gulp.src("./public/javascripts/**/*.js")
  return browserify({
      entries: [ './public/javascripts/app.js'],
      transform: [reactify]
    }
     , { debug: true }
    )
    .transform(babelify)
    .bundle()
    .pipe(plumber()) // エラー時にWatchを停止しないためのモジュール
    .pipe(sourcemaps.init()) /* ソースマップを出力させる場合 */
    //.pipe(react()) // JSX 変換
    //.pipe(babel()) // ES6 変換
//    .pipe(concat("all.js")) // all.js 1ファイルに連結
    .pipe(sourcemaps.write(".")) /* ソースマップを出力させる場合 */
    .pipe(gulp.dest('./target/web/public/main/dist'));
});

gulp.task('watch', function () {
  gulp.watch("./public/javascripts/**/*.js", ['babel']);
});

gulp.task('default', ['babel']);