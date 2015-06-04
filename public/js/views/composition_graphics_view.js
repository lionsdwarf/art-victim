App.Views.CompositionGraphics = Backbone.View.extend({
  el: '#composition-view',
  initialize: function() {
    this.$el.empty();
    $('#sortables').empty();
    this.listenTo(this.collection, 'add', this.defineModel);
  },

  defineModel: function(newModel) {
    newModel.attributes.type === 'canvas' ? this.renderCompositionText(newModel) : this.renderCompositionGraphic(newModel);
  },

  renderCompositionText: function(newModel) {
    var newCompositionTextView = new App.Views.CompositionText({ model: newModel });
    this.$el.append(newCompositionTextView.el);
  },

  renderCompositionGraphic: function(newModel) {
    var newCompositionGraphicView = new App.Views.CompositionGraphic({ model: newModel });
    this.$el.append(newCompositionGraphicView.el);
  }
});