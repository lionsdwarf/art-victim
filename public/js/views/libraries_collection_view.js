App.Views.LibrariesCollectionView = Backbone.View.extend({
    el: '#libraries',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.renderLibraryView);
    },

    renderLibraryView: function(libraryModel) {
      var newLibraryView = new App.Views.LibraryModelView({ model: libraryModel });
      this.$el.append(newLibraryView.el);
    }

});

