import path from 'path';
import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import webpackInit from './server.js';

gulp.task('server', () => {
  nodemon({
    script: 'server/index.js',
    ext: 'js'
  });
});

gulp.task('set-vars', () => {
  process.env.APP_NAME = 'CV Share';
  process.env.PROTOCOL = 'http';
  process.env.UI_HOSTNAME = 'localhost';
  process.env.UI_PORT = '3000';

  process.env.API_HOSTNAME = 'localhost';
  process.env.API_PORT = '3014';
});

gulp.task('set-dev', () => {
  process.env.ENV_VAR = 'develop';
});

gulp.task('set-prod', () => {
  process.env.ENV_VAR = 'production';
});

gulp.task('dev', ['set-dev', 'set-vars', 'server'], () => {
  webpackInit();
});
