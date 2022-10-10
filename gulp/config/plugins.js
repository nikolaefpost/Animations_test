
import browsersync from "browser-sync";
import ifPlugin from "gulp-if";
import newer from "gulp-newer";

export const plugins = {
    bs: browsersync.create(),
    if: ifPlugin,
    newer: newer,
}