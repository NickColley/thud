module.exports = function(grunt) {
 
  //When grunt is called run the build once then watch
  grunt.registerTask('default', ['concat','uglify', 'watch']);

  grunt.registerTask('watch', ['watch']);
 
  grunt.initConfig({

    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'public/js/*.js'
        ],
        dest: 'dist/js/thud.min.js'
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'dist/js/thud.min.js': ['dist/js/thud.min.js']
        } 
      }
    },

   
    watch: {
      options: {
        livereload: true,
      },
      html: {        
        files: ['public/*.html'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['public/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          livereload: true,
        }
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
