var gulp = require("gulp");
var concat = require("gulp-concat");
var del = require('del');


var paths = {
    scripts: ['src/*'],
};

gulp.task("build", ["clean"], function() {
    console.log("starting build");
    return gulp.src(["./src/homonyms.json", "./src/leaflet-voice-commands.js"])
    .pipe(concat("leaflet-voice-commands.js"))
    .pipe(gulp.dest("/build"));
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['build']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'build']);
