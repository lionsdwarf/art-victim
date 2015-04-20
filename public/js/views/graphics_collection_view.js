App.Views.GraphicsCollectionView = Backbone.View.extend({
  el: '#graphics-test',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOneGraphicView);
  },
  renderOneGraphicView: function(graphicModel) {
    var newGraphicView = new App.Views.GraphicModelView({ model: graphicModel });
    //newGraphicView.$el.attr //FINISH THIS
    this.$el.append(newGraphicView.el);
    // $('#graphics-test').hide();
  },
  showLibrary: function() {
    $('#graphics-test').fadeIn(500);
  }

});