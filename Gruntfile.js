module.exports = function(grunt) {
  grunt.initConfig({
    bowerDir: 'bower_components',
    copy: {
      main: {
        files: [
          {expand: true, cwd: '<%=bowerDir%>/bootstrap/dist/css/', src: 'bootstrap.min.css', dest: 'css/'},
          {expand: true, cwd: '<%=bowerDir%>/jquery/dist/', src: 'jquery.min.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/modernizr/', src: 'modernizr.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/raphael/', src: 'raphael.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/requirejs/', src: 'require.js', dest: 'js/vendor/'},
          {expand: true, cwd: '<%=bowerDir%>/underscore/', src: 'underscore.js', dest: 'js/vendor/'}
        ]
      }
    }
  });


  require('load-grunt-tasks')(grunt);
}