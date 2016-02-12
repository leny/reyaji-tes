/* Reyaji/tès
 *
 * /gulpfile.js - tasks
 *
 * coded by leny@flatLand!
 * started at 12/02/2016
 */

/* eslint-disable */

"use strict";

var gulp = require( "gulp" ),
    gbabel = require( "gulp-babel" ),
    browserify = require( "browserify" ),
    babelify = require( "babelify" ),
    source = require( "vinyl-source-stream" );

// react tasks

gulp.task( "react", function() {
    return browserify( "./src/main.js" )
        .transform( babelify, {
            "presets": [ "es2015", "react" ]
        } )
        .bundle()
        .pipe( source( "main.js" ) )
        .pipe( gulp.dest( "./js" ) );
} )

gulp.task( "work", function() {
    gulp.watch( "src/**/*.js", [ "react" ] );
} )

// default task

gulp.task( "default", [ "react" ] );
