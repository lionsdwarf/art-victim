App.Views.CompositionGraphicsCollectionView = Backbone.View.extend({
  el: '#home-view',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderAll);

  },

  render: function(compositionGraphicModel) {
    var newCompositionGraphicModelView = new App.Views.CompositionGraphicModelView({
      model: compositionGraphicModel
    });
    this.$el.append(newCompositionGraphicModelView.el);
  },

  renderAll: function() {
    this.collection.each(this.render, this);
  }
});