App.Views.Sortable = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#sortable-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    var sortableTemplate = this.template(this.model.toJSON());
    var newSortable = this.$el.html(sortableTemplate);
    newSortable.attr('data-name', this.model.attributes.data_name);
    newSortable.prependTo($('#sortables'));
  }
});