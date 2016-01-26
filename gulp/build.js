/*
 * Gulp tasks for compiling / building application.
 *
 * We must handle HTML, CSS, IMG/ICON/ASSET, JS targets from various sources.
 */

'use strict'

/*
 * Common modules
 */
var gulp = require('gulp')

gulp.task('build', ['build:css', 'copy:html', 'build:js'])

/*
 * HTML
 */

// TODO: replace asset filenames with their hashed equivalents
gulp.task('copy:html', function () {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('.tmp'))
})

/*
 * CSS
 */

var stylus = require('gulp-stylus')
var nib = require('nib')
var jeet = require('jeet')
var rupture = require('rupture')
var axis = require('axis')
var autoprefixer = require('autoprefixer-stylus')

// TODO: minify
gulp.task('build:css', function () {
  return gulp.src('app/css/index.styl')
    .pipe(stylus({
      use: [nib(), jeet(), rupture(), axis(), autoprefixer()],
      sourcemap: { inline: true, sourceRoot: '.', basePath: 'css' },
      import: ['nib'],
      compress: true
    }))
    .pipe(gulp.dest('.tmp/css'))
})

/*
 * IMG/ICON/ASSET
 */

// TODO: imagemin
// TODO: gulp-rev / gulp-rev-all

/*
 * JS
 */

// TODO: envify
var plumber = require('gulp-plumber')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var babelify = require('babelify')
var through2 = require('through2')
var sourcemaps = require('gulp-sourcemaps')

var transformify = through2.obj(function (file, enc, next) {
  browserify(file.path, {
    debug: true, // enables sourcemaps by default
    cache: {}
  })
  .transform(babelify.configure({
    presets: ['es2015']
  }))
  .bundle(function (_err, res) { // TODO: handle errors!
    // assumes file.contents is a Buffer
    file.contents = res
    next(null, file)
  })
})

gulp.task('build:js', function () {
  return gulp.src('app/js/index.js')
    .pipe(plumber())
    .pipe(transformify)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.', { sourceRoot: '/' }))
    .pipe(gulp.dest('.tmp/js'))
})
