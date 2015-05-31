App.Views.Libraries = Backbone.View.extend({
    el: '#libraries',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.renderLibraryView);
    },

    renderLibraryView: function(libraryModel) {
      var libraryView = new App.Views.Library({ model: libraryModel });
      this.$el.append(libraryView.el);
    }

});

