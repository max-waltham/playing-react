var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('babel', function () {
  return browserify('./public/javascripts/app.js', { debug: true })
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) {
      console.log("Error : ", err.message);
      this.emit('end');
    })

    // .pipe(plumber()) // エラー時にWatchを停止しないためのモジュール 止まるけど
    .pipe((source)('all.js'))
    .pipe(gulp.dest('./public/javascripts')

  );
});

gulp.task('watch', function () {
  gulp.watch(["./public/javascripts/**/*.js", "!./public/javascripts/all.js"], ['babel']);
});

gulp.task('default', ['babel']);
