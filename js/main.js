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
  // Stand.set({
  //   maxLevle: 5
  // });

  var stand = new Stand({
    r: 150,
    height: 600,
    width: 600,
    centerX: 300,
    centerY: 300,
    data: {
      theme: '#aa4095',
      standName: '',
      masterName: '',
      status: {
        '破坏力': 5,
        '速度': 5,
        '射程距离': 3,
        '持久力': 5,
        '精密动作性': 5,
        '成长性': 5
      }
    }
  });


  // stand.update({
  //   standName: '',
  //   masterName: '',
  //   status: {

  //   }
  // });

});
});

