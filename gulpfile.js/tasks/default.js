const getEnabledTasks = require('../lib/getEnabledTasks');
const gulpSequence    = require('gulp-sequence');
const gulp            = require('gulp');

const defaultTask = (cb) => {
  const tasks = getEnabledTasks('watch');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb);
};

gulp.task('default', defaultTask)
module.exports = defaultTask
