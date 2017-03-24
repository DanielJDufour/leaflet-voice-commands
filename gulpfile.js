var gulp = require("gulp");
var concat = require("gulp-concat");
var del = require('del');
var fs = require("fs");
var insertLines = require('gulp-insert-lines');

var paths = {
    scripts: ['src/*'],
};


gulp.task("build", ["clean"], function() {
    console.log("starting build");

    var homonyms = "\n    //https://github.com/DanielJDufour/homonyms.git\n    var homonyms = " + fs.readFileSync("./src/homonyms.json", "utf8") + ";\n";
    return gulp.src(["./src/leaflet-voice-commands.js"])

    // insert the homonyms inside the closure formed by the module
    // so we don't pollute the global scope
    .pipe(insertLines({
        "after": /'use strict';/i,
        "lineAfter": homonyms
    }))

    .pipe(concat("leaflet-voice-commands.js"))
    .pipe(gulp.dest("build"));
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
