/**
 ***************************************************************************
 * Skillet - Gulp Setup
 ***************************************************************************
 *
 * This file sets up all the Gulp Tasks that are used for this system.
 *
 * $. Required Packages
 * $. Variables
 * $. Functions
 * $. Styles
 * $. Watch
 * $. Default
 *
 */



/* $. Required Packages
\*----------------------------------------------------------------*/

var gulp         = require('gulp'),                // https://www.npmjs.com/package/gulp
    $            = require('gulp-load-plugins')(), // https://www.npmjs.com/package/gulp-load-plugins
    autoprefixer = require('autoprefixer-core'),   // https://www.npmjs.com/package/gulp-autoprefixer
    del          = require('del');                 // https://www.npmjs.com/package/del



/* $. Variables
\*----------------------------------------------------------------*/

/**
 * Define base 'assets' directory
 */
var assets = 'assets/';

/**
 * Define 'app/dist' directory based on 'assets' directory
 */
var paths = {
    app: assets + 'app/',
    dist: assets + 'dist/'
};



/* $. Functions
\*----------------------------------------------------------------*/

/**
 * On call, edit/change the 'notify' onError method
 */
var onError = function( err ) {
    $.notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(err);
    this.emit('end');
};



/* $. Styles
\*----------------------------------------------------------------*/

gulp.task('styles', function () {

    /**
     * Define source path
     */
    return gulp.src( paths.app + '*.scss' )

        /**
         * Stop pipeline breaks onError
         */
        .pipe( $.plumber({ errorHandler: onError }) )

        /**
         * Start source maps module
         */
        .pipe( $.sourcemaps.init() )

        /**
         * Compile scss to css
         */
        .pipe( $.sass({ outputStyle: 'compressed' }) )

        /**
         * Prefix needed CSS based on http://caniuse.com
         */
        .pipe(
            $.postcss([
                autoprefixer({
                    browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
                    cascade: false
                })
            ])
        )

        /**
         * Pixel fallback for 'rem'
         */
        .pipe( $.pixrem('1em') )

        /**
         * Create Source Maps
         */
        .pipe( $.sourcemaps.write( './maps' ) )

        /**
         * Define destination path
         */
        .pipe( gulp.dest( paths.dist + '' ) )

        /**
         * Call livereload
         */
        .pipe( $.livereload() )

        /**
         * Notify OS with message
         */
        .pipe(
            $.notify({
                title: 'Task finished',
                message: 'Styles',
                onLast: true
            })
        );
});



/* $. Clean
\*----------------------------------------------------------------*/

gulp.task('clean', function (cb) {
    del([
        paths.dist + '**/*',
    ], cb);
});



/* $. Watch
\*----------------------------------------------------------------*/

gulp.task('watch', function () {

    /**
     * Start Livereload
     */
    $.livereload.listen();

    /**
     * Watch .scss files for changes and run 'styles' task
     */
    gulp.watch( paths.app + '**/*.scss', ['styles'] );
});



/* $. Default
\*----------------------------------------------------------------*/

gulp.task('default', ['styles']);
