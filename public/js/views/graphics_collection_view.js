App.Views.GraphicsCollectionView = Backbone.View.extend({
  // el: '#graphics',
  initialize: function(libraryModel) {
    this.listenTo(this.collection, 'add', this.renderOneGraphicView);
    var collectionName = libraryModel.collection.models[0].attributes.name;
    this.el = '#' + collectionName + '-graphics';
    debugger
  },
  renderOneGraphicView: function(graphicModel) {
    var newGraphicView = new App.Views.GraphicModelView({ model: graphicModel });
    this.$el.append(newGraphicView.el);
    // $('#graphics-test').hide();
  },
  showLibrary: function() {
    $('#graphics').fadeIn(500);
  }

});