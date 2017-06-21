const gulp = require('gulp');
const yargs = require('yargs').argv;
const browserSync = require('browser-sync');
const path = require("path");
const slash = require('slash');
const fs = require('fs');
const url = require("url");
const pug = require('pug');

const conf = require('../conf').serve;

gulp.task("serve", ()=> {
  if (yargs.build == true) {
    browserSync(conf.build);
  } else {
    browserSync(conf.dest);
  }
});
