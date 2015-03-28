module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - another js utility library\n* More info at pinjasaur.github.io/util-js/\n*/\n'
      },
      build: {
        src: 'util.js',
        dest: 'util.min.js'
      }
    },

    jshint: {
      beforeconcat: ['util.js']
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);

};