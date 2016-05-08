var gulp = require('gulp')
var del = require('del')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var nodemon = require('gulp-nodemon')

// Typescript Compiling Options, Copy from tsconfig.json
var tsOptions = {
  "target": "es5",
  "module": "commonjs",
  "allowJs": true,
  "sortOutput": true
};
var buildSrc = 'src/**/*'; // Where source files are held
var buildFolder = './build'; // Where build files will be run


gulp.task('clean', () => {
  return del(buildFolder)
});

gulp.task('build', ['clean'], ()=> {
	var tsResult = gulp.src(buildSrc)
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
		.pipe(ts(tsOptions)); // Compile Typescript AND Javascript	
	return tsResult.js
    .pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: '../src/'})) // Must have source root be relative to build path
    .pipe(gulp.dest(buildFolder));
});

gulp.task('start', ['build'], function () {
  var stream = nodemon({
    script: buildFolder + '/app.js', // run ES5 code
    watch: buildSrc, // watch ES2015 & Typescript code
    tasks: ['build'], // compile synchronously onChange
    ext: 'js ts'
    })
  return stream;
})

// For some reason the server restarts twice...super annoying...


