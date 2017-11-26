var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
    require('./gulp/' + task)
})
gulp.task('js', function() {
    gulp.src(['ng/module.js','ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
    .pipe(sourceMap.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
})