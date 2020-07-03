'use strict';
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');
const del = require('del');

const SRC_TS = 'src/**/*.ts';

const tsProject = ts.createProject('tsconfig.json');

// task to clean all files in build folder
gulp.task('clean:build', () => {
 return del(['build/**/*']);
});

gulp.task('tslint', () => {
  return gulp.src(SRC_TS)
  .pipe(tslint({
    formatter: 'verbose'
  }))
  .pipe(tslint.report())
});

// task to transpile all typescripts into javascript in build folder
gulp.task('build', () => {
 return tsProject.src()
 .pipe(tsProject())
 .js.pipe(gulp.dest('build'));
});

// tasks to watch over changes
gulp.task('watch', () => {
  gulp.watch(SRC_TS, gulp.series('tslint', 'build'));
});

// default tasks
gulp.task('default', gulp.series('clean:build', 'build', 'watch'), () => {
  console.log('Project successfully build');
});
