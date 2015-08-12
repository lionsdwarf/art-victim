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
    App.compositionViews.push(App.newCompositionTextView);
  },

  renderCompositionGraphic: function(newModel) {
    this.newGraphicEl();
    var element = '#cg-' + this.graphicCounter; 
    App.newCompositionGraphicView = new App.Views.CompositionGraphic({ model: newModel });
    $(element).append(App.newCompositionGraphicView.el);
    App.compositionViews.push(App.newCompositionGraphicView);
  },

  renderCompositionBackground: function(newModel) {
    App.newCompositionBackgroundView = new App.Views.CompositionBackground({
      model: newModel
    });
    $('#background-view').append(App.newCompositionBackgroundView.el);
    App.compositionViews.push(App.newCompositionBackgroundView);
  },

  newGraphicEl: function() {
    this.graphicCounter += 1;
    var newDiv = $('<div>').addClass('cg');
    var newDivId = 'cg-' + this.graphicCounter;
    newDiv.attr('id', newDivId);
    newDiv.appendTo('#graphic-view');
  },

  setAttributes: function() {
    for (var i = 0; i < App.compositionViews.length; i++) {
      App.compositionViews[i].setAttributes();
    }
    this.save();
  },

  save: function() {
    for (var i = 0; i < App.compositionViews.length; i++) {
      App.compositionViews[i].save();
    }
    alert('Composition saved.');
  }
});