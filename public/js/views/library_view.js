App.Views.LibraryModelView = Backbone.View.extend({
  className: 'library',
  initialize: function() {
    this.template = Handlebars.compile($('#library-template').html());
    this.render();
  },

  render: function() {
    var libraryTemplate = this.template(this.model.toJSON());
    this.$el.html(libraryTemplate);
    //pause to render templates which contain els for graphicsCollectionViews
    setTimeout(function() { this.renderLibraryGraphicsCollection()}.bind(this), 500);
  },

  renderLibraryGraphicsCollection: function() {
    var libraryModel = this.model;
    var collectionName = libraryModel.get('library');
    var libraryGraphicsCollection = new App.Collections.LibraryGraphicsCollection(libraryModel);
    var libraryGraphicsCollectionView = new App.Views.LibraryGraphicsCollectionView({
      el: '#' + collectionName + '-graphics',
      collection: libraryGraphicsCollection
    });
  }

});

