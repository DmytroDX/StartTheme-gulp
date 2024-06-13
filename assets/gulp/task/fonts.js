import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const fonts = () => {
    return app.gulp.src(app.path.fonts.src)
    .pipe(app.plugins.plumber({
        errorHandler: app.plugins.notify.onError(error => ({
            title: "FONTS",
            message: error.message
        }))
    }))
    .pipe(app.plugins.newer(app.path.fonts.build))
    .pipe(fonter({
        formats: ["ttf", "woff"]
    }))
    .pipe(app.gulp.dest(app.path.fonts.build))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.fonts.build));
}