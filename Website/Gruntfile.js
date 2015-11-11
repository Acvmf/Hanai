module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        
        //minify html
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'src/*.html'     // 'destination': 'source'
                }
            }
        },
        //concatenate all js files
        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'libs/jquery/**/*.min.js',
                    'libs/**/*.min.js',//All JS in this directory
                    'libs/*.min.js',
                    'src/js/*.js'
                ],
                dest: 'dist/js/production.js'
            }
        },
        //minify all js files
        uglify: {
            build: {
                src: 'dist/js/production.js',
                dest: 'dist/js/production.min.js'
            }
        },
        //minify all css
        cssmin: {
            options: {
                shortHandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    'dist/css/style.min.css': ['libs/**/*.min.css', 'src/css/*.css']
                }]
            }
        },
        //optimize all images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },
        
        csslint: {
          strict: {
            options: {
              import: 2
            },
            src: ['src/css/**/*.css']
          }
        },
        
        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ['dist'],
                    livereload: true
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },
        //watch for changes
        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            
            html: {
                files: 'src/*.html',
                tasks: ['htmlmin']
            },
            
            scripts: {
                files: [
                    'src/js/*.js',
                    'libs/**/*.js'
                ],
                tasks: ['concat', 'uglify']
            },
            
            css: {
                files: 'src/css/*.css',
                tasks: ['cssmin', 'csslint']
            },
            
            img: {
                files: 'src/img/**/*.*',
                tasks: 'imagemin'
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['htmlmin', 'concat', 'uglify', 'cssmin', 'imagemin', 'express', 'open', 'watch']);
    grunt.registerTask('dev', ['express', 'open', 'watch']);
};