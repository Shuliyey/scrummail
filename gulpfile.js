var gulp = require("gulp");
var LiveServer = require("gulp-live-server");
var browserSync = require("browser-sync");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task('live-server', function () {
  var server = new LiveServer('src/server/app.js');
  server.start();
});

gulp.task('bundle', function() {
  return browserify({
    entries: 'src/app/main.jsx',
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('src/tmp'));
});

gulp.task('copy', function () {
  gulp.src(['src/app/css/*.css'])
  .pipe(gulp.dest('src/tmp/css'));
})

gulp.task('serve', ['copy', 'bundle', 'live-server'], function () {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 9001
  })
});

