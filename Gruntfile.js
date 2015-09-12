/**
 * Created by admin on 12.09.2015.
 */

module.exports = function (grunt) {
    console.log(grunt.cli.options);
    var config = grunt.cli.options.config || 'default';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["public/dist/*.*", "public/css/*.*"],
        less: {
            dev: {
                options: {
                    strictMath: true
                },
                files: {
                    "public/css/style.css": "public/less/style.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', [
        'clean',
        'less'
    ]);
};