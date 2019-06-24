/* globals require */

// eslint-disable-next-line strict
'use strict';

// General
var gulp = require('gulp-help')(require('gulp'));
var rsync = require('gulp-rsync');

var localConfig = {};

try {
  localConfig = require('./local.gulp-config');
}
catch (e) {
  if (e.code !== 'MODULE_NOT_FOUND') {
    throw e;
  }
}
require('emulsify-gulp')(gulp, localConfig);

/**
 * Deploy
 */
gulp.task('pl-build', () => {
    console.log("Building /build -- just for you!");
  // Create build directory.
  return gulp.src([
            `${localConfig.paths.dist_js}/**/*`,
            `${localConfig.paths.pattern_lab}/**/*`,
            `${localConfig.themeDir}/CNAME`,
          ],
          { base: localConfig.themeDir })
      .pipe(gulp.dest('build'));


});

gulp.task('pl-deploy', function() {
    return gulp.src('build/**')
        .pipe(rsync({
            root: 'build/',
            hostname: 'webprod-1',
            destination: '/var/www/html/pattern-lab/',
            username: 'marcomm'
        }));
});

