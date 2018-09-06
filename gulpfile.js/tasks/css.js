const config       = require('../config');
const gulp         = require('gulp');
if ( !config.tasks.css ) return;

const handleErrors = require('../lib/handleErrors');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync');
const cssnano      = require('gulp-cssnano');
const sass         = require('gulp-sass');
const gulpif       = require('gulp-if');
const path         = require('path');

const paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
};

const cssTask = () => {
  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer({grid: true}))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false, zindex: false})))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('css', cssTask)
module.exports = cssTask
