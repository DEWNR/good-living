const config = require('../config');
const gulp   = require('gulp');
const del    = require('del');

const cleanTask = (cb) => {
  del([config.root.dest]).then((paths) => {
    cb()
  });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask
