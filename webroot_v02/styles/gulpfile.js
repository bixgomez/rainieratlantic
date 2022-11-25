// Helpful (but flawed) guide:
// https://zellwk.com/blog/dart-sass-gulp/

// More helpful guide:
// https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js

const {src, dest, watch, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const Fiber = require('fibers')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const bs = require("browser-sync").create();

sass.compiler = require('sass')

function generateCSS(cb) {
    src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules'],
            fiber: Fiber
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(dest('css'))
        .pipe(bs.stream())
    cb();
}

function watchFiles(cb) {
    watch('sass/**/*.scss', generateCSS);
    watch('js/**.js');
}

function browserSync(cb) {
    bs.init({
        server: {
            baseDir: "../"
        }
    });
    watch('sass/**/**.scss', generateCSS);
    watch("../js/**.js").on('change', bs.reload);
    watch("../**.html").on('change', bs.reload);
    watch("../**.php").on('change', bs.reload);
}

exports.css = generateCSS

exports.watch = watchFiles;

exports.bs = browserSync;