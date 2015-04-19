App.Views.GraphicsCollectionView = Backbone.View.extend({
  el: '#library',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  renderOneGraphicView: function(graphicModel) {
    var newGraphicView = new App.Views.GraphicView({ model: graphicModel });
    //newGraphicView.$el.attr //FINISH THIS
    this.$el.append(newGraphicView.el);
  }

});