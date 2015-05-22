App.Views.LibraryGraphicsCollectionView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOneGraphicView);
    this.collection.fetch();
  },

  renderOneGraphicView: function(libraryGraphicModel) {
    var newLibraryGraphicView = new App.Views.LibraryGraphicModelView({ model: libraryGraphicModel });
    this.$el.append(newLibraryGraphicView.el);
  },

  // showLibrary: function() {
  //   $('#graphics').fadeIn(500);
  // }

});