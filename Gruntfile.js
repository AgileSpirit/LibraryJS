'use strict';

//Wrapper function with one parameter
module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'dist/*'
                        ]
                    }
                ]
            }
        },

        uglify: {
            dist : {
                options: {
                    sourceMap: 'dist/sourcemap.map',
                    preserveComments: 'true'
                },
                files: [{
                    src : ['src/**/*.js'],
                    dest : 'dist/simulators.min.js'
                }]
            }
        },

        copy: {
            dist: {
                src: ['src/simulators.js'],
                dest: 'dist/simulators.js'
            }
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'uglify:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', 'build');
};