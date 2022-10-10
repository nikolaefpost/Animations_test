
export const server = () => {
    app.plugins.bs.init({
        server: {
            baseDir: `${app.path.build.html}`,
            // index: "preload.html"
        },
        notify: true,
        port: 3000,
    })
}