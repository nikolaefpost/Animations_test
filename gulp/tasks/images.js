import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.pic)
        // .pipe(app.plugins.newer(app.path.build.pic))
        // .pipe(webp())
        // .pipe(app.gulp.dest(app.path.build.pic))
        // .pipe(app.gulp.src(app.path.src.pic))
        .pipe(app.plugins.newer(app.path.build.pic))
        .pipe(imagemin({
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 2
        }))
        .pipe(app.gulp.dest(app.path.build.pic))
        .pipe(app.plugins.bs.stream())
}