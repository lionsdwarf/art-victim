App.Views.CompositionGraphics = Backbone.View.extend({
  el: '#composition-view',
  graphicCounter: 0,
  graphicViews: [],
  initialize: function() {
    // $('#background-view').empty();
    // $('#graphic-view').empty();
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
    var newCompositionTextView = new App.Views.CompositionText({ model: newModel });
    $(element).append(newCompositionTextView.el);
    this.graphicViews.push(newCompositionTextView);
  },

  renderCompositionGraphic: function(newModel) {
    this.newGraphicEl();
    var element = '#cg-' + this.graphicCounter 
    var newCompositionGraphicView = new App.Views.CompositionGraphic({ model: newModel });
    $(element).append(newCompositionGraphicView.el);
    this.graphicViews.push(newCompositionGraphicView);
  },

  renderCompositionBackground: function(newModel) {
    var newCompositionBackgroundView = new App.Views.CompositionBackground({
      model: newModel
    });
    $('#background-view').append(newCompositionBackgroundView.el);
    this.graphicViews.push(newCompositionBackgroundView);
  },

  newGraphicEl: function() {
    this.graphicCounter += 1;
    var newDiv = $('<div>').addClass('cg');
    var newDivId = 'cg-' + this.graphicCounter;
    newDiv.attr('id', newDivId);
    newDiv.appendTo('#graphic-view');
  },

  setAttributes: function() {
    for (var i = 0; i < this.graphicViews.length; i++) {
      this.graphicViews[i].setAttributes();
    }
  },

  save: function() {
    for (var i = 0; i < this.graphicViews.length; i++) {
      this.graphicViews[i].save();
    }
  }
});