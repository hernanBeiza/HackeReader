/**
 * Module Dependencies
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

/**
 * Gulp Tasks
 */

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    open: false,
    proxy: "http://localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true,
    //reloadDelay: 1000,
    //files: ["public/**/*.*","app/**/*"]
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app.js',
    ext: 'js pug css',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
    //reload({ stream: false });
  });

});

gulp.task('default', ['browser-sync'], function () {

});