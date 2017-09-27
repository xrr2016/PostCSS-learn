const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnext = require('cssnext')

gulp.task('css', () => {
  const procesors = [
    autoprefixer({
      browsers: ['last 3 version'],
      cascade: false,
      remove: false
    }),
    cssnext()
  ]
  return gulp
    .src('./src/css/*.css')
    .pipe(postcss(procesors))
    .pipe(gulp.dest('./dist'))
})
