const browserSync = require('browser-sync');
const config      = require('../config');
const gulp        = require('gulp');

const browserSyncTask = () => {
  browserSync.init(config.tasks.browserSync)
};

gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
