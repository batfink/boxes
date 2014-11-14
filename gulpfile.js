var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var deploy = require('gulp-gh-pages');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('www'));
});

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
    gulp.watch(['css/**/*'], ['styles']);

});
