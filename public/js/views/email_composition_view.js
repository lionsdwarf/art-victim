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

    var sortedCollection = App.compositionGraphicsCollection.sortBy(function(graphic) { return graphic.get('z_index') });

    for (var i = 0; i < sortedCollection.length; i++) {
      var model = sortedCollection[i].attributes;
      var left = model.left;
      var top = model.top;
      if (model.type === 'text') {
        this.paintText(ctx, model, left, top);
      }
      else {
        this.paintGraphic(ctx, model, left, top);
      }
    }
  },

  paintText: function(ctx, model, left, top) {
    var text = model.user_input;
    ctx.font = "30px Special Elite, cursive";
    ctx.fillText(text, left, top);
  },

  paintGraphic: function(ctx, model, left, top) {
    var height = model.height;
    var width = model.width;
    var newImg = new Image();
    newImg.src = model.url;
    newImg.onload = function() {
      ctx.drawImage(newImg, left, top, width, height);
      newImg.style.display = 'none';
    }
  }

});

// var canvas = document.getElementById("canvas1");
// var dataURL = canvas.toDataURL();
