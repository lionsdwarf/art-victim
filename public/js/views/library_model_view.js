App.Views.LibraryModelView = Backbone.View.extend({
  className: 'library',
  initialize: function() {
    this.template = Handlebars.compile($('#library-template').html());
    this.render();
  },
  render: function() {
    var libraryTemplate = this.template(this.model.toJSON());
    this.$el.html(libraryTemplate);
  }
})