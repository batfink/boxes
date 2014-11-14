var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src('./www/**/*')
        .pipe(deploy());
});

gulp.task('default', function() {
    browserSync({
        server: {
            baseDir: './www'
        }
    });

    gulp.watch(['www/**/*'], reload);

});
