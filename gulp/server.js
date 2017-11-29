var gulp    = require('gulp')
var nodemon = require('gulp-nodemon')

//restarts server on gulp dev:server
gulp.task('dev:server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  })
})

//ignores non node files
gulp.task('dev:server', function () {
  nodemon({
    script: 'server.js',
    ext:    'js',
    ignore: ['ng*', 'gulp*', 'assets*']
  })
})
