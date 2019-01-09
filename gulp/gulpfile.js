const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject("../tsconfig.js");

gulp.task("typescript", function() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest(""));
})

gulp.task("watch", function() {
  gulp.watch("*.ts", ["typescript"])
})

gulp.task("default", ["watch"]);