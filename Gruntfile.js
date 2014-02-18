module.exports = function(grunt) {
 
  //When grunt is called run the build once then watch
  grunt.registerTask('default', ['concat','uglify', 'watch']);

  grunt.registerTask('watch', ['watch']);
 
  grunt.initConfig({

    concat: {
      js: {
        options: {
          seperator: ';'
        },
        src: [
          'js/*.js'
        ],
        dest: 'thud.js'
      },
    },

    uglify: {
      js: {
        files: {
          'thud.min.js': ['thud.js']
        } 
      }
    },

   
    watch: {
      options: {
        livereload: true,
      },
      html: {        
        files: ['*.html'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['js/*.js'],
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
