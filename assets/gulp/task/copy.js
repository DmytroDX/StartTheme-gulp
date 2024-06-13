

export const copy = () => {
    return app.gulp.src(app.path.libraries.src)
    .pipe(app.gulp.dest(app.path.libraries.build));
}