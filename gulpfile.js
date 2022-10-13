const gulp = require("gulp");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const { src, dest, series, watch, task } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();

// File directories
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    sassPath: "src/scss/*.scss",
    jsPath: "src/js/*.js",
    tsPath: "src/ts/*.ts",
    imgPath: "src/imgs/*"
}

// SASS-task
function sassTask() {
    return src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css')
    );
}

// HTML-task / Kopierar HTML-filerna
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

// CSS-task / Kopierar, konkatenerar och minimerar CSS-filerna
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('pub/css'));
}

// TypeScript-task / Konverterar TS-filerna till JS
function tsTask() {
    return src(files.tsPath)
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('src/js'));
}

// JS-task / Kopierar, konkatenerar och minimerar JS-filerna
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'));
}

// Image-task / Kopierar bildfilerna
function imgTask() {
    return src(files.imgPath)
    .pipe(dest('pub/imgs'));
}

// Browsersync / Ger webbsidan en livereload-funktion
function browsersyncServer(cb) {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Task / Ser till att rätt task körs om någon fil ändras
function watchTask(){
    watch(files.htmlPath, browsersyncReload);
    watch([files.sassPath, files.jsPath], browsersyncReload);
    watch(files.htmlPath, copyHTML);
    watch(files.sassPath, sassTask);
    watch(files.tsPath, tsTask);
    watch(files.jsPath, jsTask);
    watch(files.cssPath, cssTask);
    watch(files.imgPath, imgTask);
}

// Exporterar alla tasks
exports.default = series(
    copyHTML,
    tsTask, 
    jsTask, 
    imgTask,
    sassTask,
    cssTask,
    browsersyncServer, 
    browsersyncReload, 
    watchTask);