module.exports = function(grunt) {
  grunt.initConfig({
    bowerDir: 'bower_components',
    copy: {
      main: {
        files: [
          {expand: true, cwd: '<%=bowerDir%>/pure/', src: 'pure.css', dest: 'css/'},
          {expand: true, cwd: '<%=bowerDir%>/jquery/dist/', src: 'jquery.min.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/modernizr/', src: 'modernizr.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/raphael/', src: 'raphael.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/requirejs/', src: 'require.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/underscore/', src: 'underscore.js', dest: 'js/vendor/'}
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          keepalive: true
        }
      }
    },
    concat: {
      css: {
        src: ['css/pure.css', 'css/main.css'],
        dest: 'css/all.css'
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/all.min.css': ['css/all.css']
        }
      }
    },
    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'index.html',
        'img/*',
        'css/all.min.css',
        'data/**/*',
        'js/vendor/*.js',
        'js/main.min.js'
      ]
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: './js',
          paths: {
            /* Vendor */
            raphael: 'vendor/raphael',
            underscore: 'vendor/underscore',
            jquery: 'vendor/jquery.min',

            /* Modules */
            stand: 'stand/stand.min'
          },
          name: 'main',
          out: 'js/main.min.js'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['concat', 'cssmin', 'requirejs']);
}