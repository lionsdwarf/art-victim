App.Views.EmailComposition = Backbone.View.extend({
  el: '#email-composition',

  initialize: function() {
    this.template = Handlebars.compile($('#email-composition-template').html());
    this.render();
    this.defineImage();
  },

  render: function() {
    this.$el.html(this.template);
  },

  defineImage: function() {
    var canvas = document.getElementById('email-canvas');
    var images = App.layerOrder;

    for (var i = 0; i < images.length; i++) {
    var img = "#" + images[i] + "";
    var img = $(img);
    var left = 10;
    var top = 40;
    var width = 35;
    var height = 55;
    // var left = img.css('left');
    // var top = img.css('top');
    // // debugger;
    img.attr('src') === undefined ? this.paintText(canvas, img, left, top) : this.paintGraphic(canvas, img, left, top, width, height);
    }
  },

  paintText: function(canvas, img, left, top) {
    var ctx = canvas.getContext('2d');
    var text = img.data('text');
    ctx.font = "30px Special Elite, cursive";
    ctx.fillText(text, left, top);
  },

  paintGraphic: function(canvas, img, left, top, width, height) {

        var left = 0;
    var top = 0;
    var width = 100;
    var height = 200;

    var ctx = canvas.getContext('2d');
    var newImg = new Image();
    newImg.src = img.attr('src');
    newImg.onload = function() {
      ctx.drawImage(newImg, left, top, width, height);
      newImg.style.display = 'none';
    }
  }

});


// var img = new Image();
// img.src = '/graphics/famous_people/snoop_murder_wt_case.png';
// // var canvas = document.getElementById('email-canvas');
// // var ctx = canvas.getContext('2d');
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
//   img.style.display = 'none';
// };

// var canvas = document.getElementById("canvas1");
// var dataURL = canvas.toDataURL();

// var carosine = document.getElementById("carosine-NaN");
// var dataURL = canvas.toDataURL();