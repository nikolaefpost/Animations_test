import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
// import webpcss from "gulp-webpcss"
// import groupCssMediaQueries from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css"

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
        .pipe(sass({
            outputStyle: "expanded"
        }))
        // .pipe(groupCssMediaQueries())
        // .pipe(webpcss({
        //     webpClass: ".webp",
        //     noWebpClass: ".no_webp"
        // }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowsersList: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.bs.stream());
}