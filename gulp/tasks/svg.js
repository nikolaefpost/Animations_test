export  const svg = () => {
    return app.gulp.src(app.path.src.svg, {sourcemaps: true})
        .pipe(app.gulp.dest(app.path.build.pic))
        .pipe(app.plugins.bs.stream())
}