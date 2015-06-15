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
      if (model.type === 'text') {
        this.paintText(ctx, model);
      }
      else if (model.type === 'graphic') {
        this.paintGraphic(ctx, model);
      }
      else if (model.type === 'background') {
        this.paintBackground(ctx, model)
      }
    }
    this.paintFrame(ctx);
  },

  paintBackground: function(ctx, model) {
    var left = model.left + 129;
    var top = model.top + 53;
    var height = model.height;
    var width = model.width;
    var background = new Image();
    background.src = model.url;
    background.onload = function() {
      ctx.drawImage(background, left, top, width, height);
      background.style.display = 'none';
    }
  },

  paintText: function(ctx, model) {
    var left = model.left;
    var top = model.top;
    var text = model.user_input;
    ctx.font = "30px Special Elite, cursive";
    ctx.fillText(text, left, top);
  },

  paintGraphic: function(ctx, model) {
    var left = model.left;
    var top = model.top;
    var height = model.height;
    var width = model.width;
    var graphic = new Image();
    graphic.src = model.url;
    graphic.onload = function() {
      ctx.drawImage(graphic, left, top, width, height);
      graphic.style.display = 'none';
    }
  },

  paintFrame: function(ctx) {
    var frame = new Image();
    frame.src = '/graphics/frames/antique_frame.png';
    frame.onload = function() {
      ctx.drawImage(frame, 0, 0, 1100, 850);
      frame.style.display = 'none';
    }
  }

});

// var canvas = document.getElementById("canvas1");
// var dataURL = canvas.toDataURL();
