var gulp    = require('gulp')
var nodemon = require('gulp-nodemon')

//ignores non node files
gulp.task('dev:server', function () {
  nodemon({
    script: 'server.js',
    ext:    'js',
    ignore: ['ng*', 'gulp*', 'assets*']
  })
})
