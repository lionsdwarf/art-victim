App.Views.GraphicsCollectionView = Backbone.View.extend({
  el: '#library',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOneGraphicView);
  },
  renderOneGraphicView: function(graphicModel) {
    var newGraphicView = new App.Views.GraphicModelView({ model: graphicModel });
    //newGraphicView.$el.attr //FINISH THIS
    this.$el.append(newGraphicView.el);
    $('#library').hide();
  },
  showLibrary: function() {
    $('#library').fadeIn(300);
  },

});