import babel from "gulp-babel";
import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.js.src, { sourcemap: app.isDev })
    .pipe(app.plugins.plumber({
        errorHandler: app.plugins.notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack({
        mode: app.isProd ? "production" : "development"
    }))
    .pipe(app.gulp.dest(app.path.js.build, { sourcemap: app.isDev }));
}