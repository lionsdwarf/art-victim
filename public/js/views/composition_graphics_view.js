App.Views.CompositionGraphics = Backbone.View.extend({
  el: '#composition-view',
  graphicCounter: 0,
  initialize: function() {
    $('#sortables').empty();
    $('#graphic-view').empty();
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
    this.newGraphicEl();
    var element = '#cg-' + this.graphicCounter; 
    App.newCompositionTextView = new App.Views.CompositionText({ model: newModel });
    $(element).append(App.newCompositionTextView.el);
  },

  renderCompositionGraphic: function(newModel) {
    this.newGraphicEl();
    var element = '#cg-' + this.graphicCounter 
    App.newCompositionGraphicView = new App.Views.CompositionGraphic({ model: newModel });
    $(element).append(App.newCompositionGraphicView.el);
  },

  renderCompositionBackground: function(newModel) {
    App.newCompositionBackgroundView = new App.Views.CompositionBackground({
      model: newModel
    });
    $('#background-view').append(App.newCompositionBackgroundView.el);
  },

  newGraphicEl: function() {
    this.graphicCounter += 1;
    var newDiv = $('<div>').addClass('cg');
    var newDivId = 'cg-' + this.graphicCounter;
    newDiv.attr('id', newDivId);
    newDiv.appendTo('#graphic-view');
  },

  setAttributes: function() {
    App.newCompositionBackgroundView.setAttributes();
    App.newCompositionGraphicView.setAttributes();
    App.newCompositionTextView.setAttributes();
  },

  save: function() {
    App.newCompositionBackgroundView.save();
    App.newCompositionGraphicView.save();
    App.newCompositionTextView.save();
    alert('Composition saved.');
  }
});