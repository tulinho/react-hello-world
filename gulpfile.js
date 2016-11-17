'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var merge = require('merge-stream');
var historyApiFallback = require('connect-history-api-fallback');
var webpack = require('gulp-webpack');
var rename = require("gulp-rename");



// Clean output directory
gulp.task('clean', function () {
  return del(['public/bundle.js'], {
    force: true
  });
});

gulp.task('webpack', function () {
  return gulp.src('app/App.js')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2016']
          }
        }]
      }
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('serve', function () {
  browserSync({
    port: 5050,
    notify: false,
    logPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function (snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: './public',
    middleware: [historyApiFallback()]
  });
  gulp.watch("./public/*.js").on('change', browserSync.reload);
  gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('default', function () {
  runSequence(['clean'], ['webpack', 'serve']);
});