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
    var ctx = canvas.getContext('2d');
    var images = App.layerOrder;

    for (var i = 0; i < images.length; i++) {
      var img = "#" + images[i] + "";
      var img = $(img);
      var left = parseInt(img.css('left')) - 293;
      var top = parseInt(img.css('top')) - 124;
      var width = parseInt(img.css('width'));
      var height = parseInt(img.css('height'));
  
      img.attr('src') === undefined ? 
        this.paintText(ctx, img, left, top) : 
        this.paintGraphic(ctx, img, left, top, width, height);
    }
  },

  paintText: function(ctx, img, left, top) {
    var text = img.data('text');
    ctx.font = "30px Special Elite, cursive";
    ctx.fillText(text, left, top);
  },

  paintGraphic: function(ctx, img, left, top, width, height) {
    var newImg = new Image();
    newImg.src = img.attr('src');
    newImg.onload = function() {
      ctx.drawImage(newImg, left, top, width, height);
      newImg.style.display = 'none';
    }
  }

});

// var canvas = document.getElementById("canvas1");
// var dataURL = canvas.toDataURL();
