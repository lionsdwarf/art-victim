App.Views.GraphicsCollectionView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOneGraphicView);
    this.collection.fetch();
  },

  renderOneGraphicView: function(graphicModel) {
    var newGraphicView = new App.Views.GraphicModelView({ model: graphicModel });
    this.$el.append(newGraphicView.el);
  },

  // showLibrary: function() {
  //   $('#graphics').fadeIn(500);
  // }

});