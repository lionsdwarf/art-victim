App.Views.Library = Backbone.View.extend({
  className: 'library',
  initialize: function() {
    this.libraryTabTemplate = Handlebars.compile($('#library-tab-template').html());
    this.libraryTemplate = Handlebars.compile($('#library-template').html());
    this.el = $(this.libraryTabTemplate(this.model.toJSON()));
    this.renderLibraryTabs();
  },

  renderLibraryTabs: function() {
    var libTabTemplate = this.libraryTabTemplate(this.model.toJSON());
    this.$el.html(libTabTemplate);
    this.render();
  },

  render: function() {
    var libraryTemplate = this.libraryTemplate(this.model.toJSON());
    $('#tabs').append(libraryTemplate);
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

