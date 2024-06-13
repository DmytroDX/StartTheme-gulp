import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

export const images = () => {
    return app.gulp.src(app.path.images.src, { encoding: false })
    .pipe(app.plugins.plumber({
        errorHandler: app.plugins.notify.onError(error => ({
            title: "IMAGES",
            message: error.message
        }))
    }))
    .pipe(app.plugins.newer(app.path.images.build))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.images.build))
    .pipe(app.gulp.src(app.path.images.src, { encoding: false }))
    .pipe(app.plugins.newer(app.path.images.build))
    .pipe(imagemin({
        verbose: true
    }))
    .pipe(app.gulp.dest(app.path.images.build));
}