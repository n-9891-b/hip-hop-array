var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  bower = require('gulp-bower'),
  install = require("gulp-install");

gulp.task('bower-build', function() {
  gulp.src(['bower.json', 'package.json'])
  .pipe(install());
// gulp.task('bower', function() { 
//     return bower()
//     .pipe(gulp.dest(config.bowerDir)) 
// })
});


gulp.task('client-scripts', function() {
    // return gulp.src('client/app/*.js')
    //   .pipe(concat('client-main.js'))
    //     .pipe(rename({suffix: '.min'}))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('build/js'));
});
gulp.task('server-scripts', function() {
    // return gulp.src('server/*.js')
    //   .pipe(concat('server-main.js'))
    //     .pipe(rename({suffix: '.min'}))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('build/js'));
});

// Default Task
gulp.task('default', ['client-scripts', 'server-scripts', 'bower-build']);