var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://127.0.0.1:4000"
    });
    gulp.watch("./_site/**/*").on('change', browserSync.reload);
});
