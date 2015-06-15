App.Views.Library = Backbone.View.extend({
  className: 'library',
  initialize: function() {
    this.template = Handlebars.compile($('#library-template').html());
    this.render();
  },

  render: function() {
    var libraryTemplate = this.template(this.model.toJSON());
    this.$el.html(libraryTemplate);
    //pause to render templates which contain els for graphicsCollectionViews
    setTimeout(function() { this.renderLibraryGraphicsCollection() }.bind(this), 400);
  },

  renderLibraryGraphicsCollection: function() {
    var libraryModel = this.model;
    var collectionName = libraryModel.get('data_name');
    var libraryGraphicsCollection = new App.Collections.LibraryGraphics(libraryModel);
    var libraryGraphicsCollectionView = new App.Views.LibraryGraphics({
      el: '#' + collectionName + '-graphics',
      collection: libraryGraphicsCollection
    });
  }

});

