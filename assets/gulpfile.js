import gulp from "gulp";

// Імпортувати плагіни
import { plugins } from "./gulp/config/plugins.js";

// Імпорт шляхів
import { path } from "./gulp/config/path.js";

global.app = {
    gulp: gulp,
    plugins: plugins,
    path: path,
    isProd: process.argv.includes("--production"),
    isDev: !process.argv.includes("--production"),
}

// Імпорт завдань
import { clear } from "./gulp/task/clear.js";
import { copy } from "./gulp/task/copy.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { images } from "./gulp/task/images.js";
import { fonts } from "./gulp/task/fonts.js";

// Завдання watcher
const watcher = () => {
    gulp.watch(path.libraries.watch, copy);
    gulp.watch(path.scss.watch, scss);
    gulp.watch(path.js.watch, js);
    gulp.watch(path.images.watch, images);
    gulp.watch(path.fonts.watch, fonts);
}

const mainTasks = gulp.parallel(copy, scss, js, images, fonts);

gulp.task('default', gulp.series(clear, mainTasks, watcher));