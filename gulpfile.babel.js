import path from 'path';
import gulp from 'gulp';
import webpackInit from './server.js';

gulp.task('set-vars', () => {
  process.env.PROTOCOL = 'http';
  process.env.UI_DOMAIN = 'localhost';
  process.env.UI_PORT = '3000';
});

gulp.task('set-dev', () => {
  process.env.ENV_VAR = 'develop';
});

gulp.task('set-prod', () => {
  process.env.ENV_VAR = 'production';
});

gulp.task('dev', ['set-dev', 'set-vars'], () => {
  webpackInit();
});
