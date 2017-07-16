import gulp from "gulp";
import uglify from "uglify-es";
import {base, tasks} from "./const";

const JS = base.DIST + "**/*.js";

/*
gulp.task(tasks.CLIENT_JS_DIST, () => {
  return gulp.src(JS, {base: base.DIST})
             .pipe(uglify())
             .pipe(gulp.dest(base.DIST));
});*/

var uglifyjs = require('uglify-es'); // can be a git checkout
                                     // or another module (such as `uglify-es` for ES6 support)
var composer = require('gulp-uglify/composer');
var pump = require('pump');

var minify = composer(uglifyjs, console);

gulp.task(tasks.CLIENT_JS_DIST, function (cb) {
  // the same options as described above
  var options = {};

  pump([
      gulp.src(JS, {base: base.DIST}),
      minify(options),
      gulp.dest(base.DIST)
    ],
    cb
  );
});
