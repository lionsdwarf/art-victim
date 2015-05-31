App.Views.CompositionGraphics = Backbone.View.extend({
  el: '#home-view',
  initialize: function() {
    this.$el.empty();
    $('#sortables').empty();
    this.listenTo(this.collection, 'add', this.renderCompositionGraphic);
  },

  renderCompositionGraphic: function(newModel) {
    var newCompositionGraphicModelView = new App.Views.CompositionGraphic({
      model: newModel
    });
    this.$el.append(newCompositionGraphicModelView.el);
  }
});