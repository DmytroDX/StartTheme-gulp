import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.scss.src, { sourcemap: app.isDev })
    .pipe(app.plugins.plumber({
        errorHandler: app.plugins.notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(app.gulp.dest(app.path.scss.build, { sourcemap: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(app.gulp.dest(app.path.scss.build, { sourcemap: app.isDev }));
}