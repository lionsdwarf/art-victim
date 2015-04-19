App.Views.GraphicModelView = Backbone.View.extend({
  className: 'graphic',
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
  },
  render: function() {
    var graphicTemplate = this.template(this.model.toJSON());
    this.$el.html(graphicTemplate);
  }

});