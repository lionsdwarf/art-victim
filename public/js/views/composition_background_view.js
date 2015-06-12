App.Views.CompositionBackground = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-background-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    $('.composition-background').remove();
    var compositionBackgroundTemplate = this.template(this.model.toJSON());
    var newCompositionBackground = this.$el.html(compositionBackgroundTemplate);
  }
});