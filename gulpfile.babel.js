var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var eslint   = require('gulp-eslint');

gulp.task('lint:js', lintJS);

function lintJS(callback) {
  return gulp.src(["./public/javascripts/**/*.js", "!./public/javascripts/all.js"])
    .pipe(plumber({
      // エラーをハンドル
      errorHandler: function(error) {
        var taskName = 'eslint';
        var title = '[task]' + taskName + ' ' + error.plugin;
        var errorMsg = 'error: ' + error.message;
        // ターミナルにエラーを出力
        console.error(title + '\n' + errorMsg);

        this.emit('end');

      }
    }))
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(plumber()); // エラー時にWatchを停止しないためのモジュール
}

gulp.task('babel', function () {

  return browserify('./public/javascripts/app.js', { debug: true })
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { // エラー時にWatchを停止しないため
      console.log("Error : ", err.message);
      this.emit('end');
    })

    // .pipe(plumber()) // エラー時にWatchを停止しないためのモジュール 止まるけど
    .pipe((source)('all.js'))
    .pipe(gulp.dest('./public/javascripts')

  );
});

gulp.task('watch', [], function () {
  gulp.watch(["./public/javascripts/**/*.js", "!./public/javascripts/all.js"], ['lint:js','babel']);
});

gulp.task('default', ['babel']);
