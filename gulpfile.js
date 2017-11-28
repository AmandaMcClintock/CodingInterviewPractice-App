var gulp = require('gulp')
// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')
// var ngAnnotate = require('gulp-ng-annotate')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task)

})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
})
