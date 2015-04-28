App.Views.LibraryModelView = Backbone.View.extend({
  className: 'library',
  initialize: function() {
    this.template = Handlebars.compile($('#library-template').html());
    this.render();
    this.renderOneGraphicsCollection();
    // this.listenTo(this.collection, 'add', this.renderOneGraphicsCollection);
  },

  render: function() {
    var libraryTemplate = this.template(this.model.toJSON());
    this.$el.html(libraryTemplate);
  },

  renderOneGraphicsCollection: function() {
    var libraryModel = this.model;
    var graphicsCollection = new App.Collections.GraphicsCollection(libraryModel);
    var graphicsCollectionView = new App.Views.GraphicsCollectionView({ collection: graphicsCollection, libraryModel });
    graphicsCollection.fetch();
  }

});