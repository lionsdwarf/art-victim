App.Views.CompositionGraphics = Backbone.View.extend({
  el: '#composition-view',
  initialize: function() {
    this.$el.empty();
    $('#sortables').empty();
    this.listenTo(this.collection, 'add', this.defineModel);
  },

  defineModel: function(newModel) {
    if (newModel.attributes.type === 'text') {
      this.renderCompositionText(newModel)
    }
    else if (newModel.attributes.type === 'graphic') {
      this.renderCompositionGraphic(newModel);
    }
    else {
      this.renderCompositionBackground(newModel);
    }
  },

  renderCompositionText: function(newModel) {
    var newCompositionTextView = new App.Views.CompositionText({ model: newModel });
    this.$el.append(newCompositionTextView.el);
  },

  renderCompositionGraphic: function(newModel) {
    var newCompositionGraphicView = new App.Views.CompositionGraphic({ model: newModel });
    this.$el.append(newCompositionGraphicView.el);
  },

  renderCompositionBackground: function(newModel) {
    var newCompositionBackgroundView = new App.Views.CompositionBackground({
      model: newModel
    });
    this.$el.append(newCompositionBackgroundView.el);
  },

  saveComposition: function() {
    var name = $('#title').val();
    var dataName = name.replace(/\s/g,'');
    var url = '/users/' + App.currentUser + '/compositions';

    function save(id) {
      return $.ajax({
        url : url,
        method: 'POST',    
        data: {
          'name' : name,
          'data_name' : dataName,
          'user_id' : App.currentUser
        }
      });
    }

    save('/id').done(function(data) {
      App.currentComposition = data.id
    });
    
    setTimeout(function() { this.saveCompositionGraphics() }.bind(this), 100);
  },

  saveCompositionGraphics: function() {
    var collection = App.compositionGraphicsCollection;
    for (var i = 0; i < collection.length; i++) {
      var graphic = collection.models[i]
      var graphicDataName = graphic.attributes.data_name;
      var graphicId = "[id=" + '"' + graphicDataName + '"' + "]";
      var url = '/users/' + App.currentUser + '/compositions/' + App.currentComposition + '/composition_graphics';
      
      if (graphic.attributes.type === 'background') {
        var zIndex = -1;
        var top = parseInt($(graphicId).css('top'));
        var left = 0;
      }
      else {
        var graphicDivId = "[id=" + '"div-' + graphicDataName + '"' + "]";
        var zIndex = parseInt($(graphicDivId).css('z-index'));
        var top = parseInt($(graphicDivId).css('top'));
        var left = parseInt($(graphicDivId).css('left'));
      }

      function save() {
        $.ajax({
          url : url,
          method: 'POST',
          data: {
            'name' : graphic.attributes.name,
            'data_name' : graphicDataName,
            'url' : graphic.attributes.url,
            'z_index' : zIndex,
            'top' : top,
            'left' : left,
            'width' : $(graphicId).width(),
            'height' : $(graphicId).height(),
            'user_input' : $(graphicId).attr('data-text'),
            'type' : graphic.attributes.type,
            'composition_id' : App.currentComposition            
          }
        });
      }
      save();
    }
  }
});