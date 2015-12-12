var gulp = require('gulp');
var webpack = require('gulp-webpack');
var del = require('del');
var webpackConfig = require('./webpack.config');
var spawn = require('child_process').spawn;
var CWD = process.cwd();

var isBuild = true;

gulp.task('clean', function(cb) {
  isBuild ? del('./source/js', cb) : cb();
});

gulp.task('webpack', ['clean'], function() {
  return gulp.src('./')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./source/js'));
});

gulp.task('build', ['clean', 'webpack']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'],function() {
  isBuild = false;
  gulp.watch(['./src/**/*.jsx', './src/**/*.less'], ['build']);
});

function run(command, args) {
  return new Promise(function(resolve, reject) {
    var task = spawn(command, args, {
      cwd: CWD
    });
    task.on('close', function(code) {
      if (code !== 0) reject(new Error(command + ' process exited with code ' + code));
      else resolve();
    });
    task.stdout.pipe(process.stdout);
    task.stderr.pipe(process.stderr);
  });
}

gulp.task('dev', function() {
  run('node_modules/.bin/gulp').then(function() {
    return Promise.all([
      run('node_modules/.bin/ka', ['-p', '9999']),
      run('node_modules/.bin/gulp', ['watch'])
    ]);
  }).catch(function(e) {
    console.error(e.message);
  });
});
