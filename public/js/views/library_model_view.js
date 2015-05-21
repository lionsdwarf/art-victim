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
    setTimeout(function() { this.renderOneGraphicsCollection()}.bind(this), 500);
  },

  renderOneGraphicsCollection: function() {
    var libraryModel = this.model;
    var collectionName = libraryModel.get('library');
    var graphicsCollection = new App.Collections.GraphicsCollection(libraryModel);
    var graphicsCollectionView = new App.Views.GraphicsCollectionView({
      el: '#' + collectionName + '-graphics',
      collection: graphicsCollection
    });
  }

});

