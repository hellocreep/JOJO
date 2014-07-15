require.config({
  baseUrl: 'js',
  paths: {
    /* Vendor */
    raphael: 'vendor/raphael',
    underscore: 'vendor/underscore',
    jquery: 'vendor/jquery.min',

    /* Modules */
    stand: 'stand/stand.min'
  },
  shim: {

  }
});

require(['jquery', 'stand'], function($, Stand) {
$(function() {
  var stand;

  // $('#mask').on('mousemove', function(e) {
  //   if(e.offsetX < 41) {
  //     mask.fillStyle = 'transparent';
  //   }
  // });

  // mask = $('#mask')[0].getContext('2d');

  // mask.beginPath();
  // mask.moveTo(0, 0);
  // mask.lineTo(41, 0);
  // mask.lineTo(33, 180);
  // mask.lineTo(0, 180);
  // mask.fillStyle = 'rgba(0, 0, 0, 0.5)';
  // mask.fill();



  $('#footer').on('click', 'a', function(e) {
    e.preventDefault();
    var $this = $(this);
    $.get($this.attr('href')).done(function(result) {
      $('.stand-pic').attr('src', '/data/pic/' + result.standPic);
      $('.master-pic').attr('src', '/data/pic/' + result.masterPic);
      $('.stand-name').text(result.standName);
      $('.master-name').text(result.masterName);
      $this.parent().addClass('active').siblings().removeClass('active');
      if(!stand) {
        $('.stand-md').slideDown(function() {
          $(window).scrollTop($('.hero-img').height());
          $('.info-md img').addClass('active');
          stand = new Stand({
            r: 150,
            height: 350,
            width: $('#stand').width(),
            centerX: 350,
            centerY: 150,
            data: result
          });
        });
      } else {
        $('.info-md img').toggleClass('active');
        stand.update(result);
      }
    });

  });

});
});

