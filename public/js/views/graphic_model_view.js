App.Views.GraphicModelView = Backbone.View.extend({
  className: 'graphic',
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
    this.$el.dblclick(this.renderToCanvas)
  },
  render: function() {
    var graphicTemplate = this.template(this.model.toJSON());
    this.$el.html(graphicTemplate);
  },
  renderToCanvas: function(graphicModel) {
    var clone = this.cloneNode(true);
    console.log(clone)
    $('#canvas').append(clone);
    // addSortable(graphicModel);
  }
  // addSortable: function(graphicModel) {

  // }
});