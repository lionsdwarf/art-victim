App.Views.CompositionGraphicModelView = Backbone.View.extend({
  el: '#home-view',
  
  initialize: function() {
    this.template = Handlebars.compile($('#composition-graphic-template').html());
    this.render();
  },

  render: function() {
    var compositionGraphicTemplate = this.template(this.model.toJSON());
    this.$el.html(compositionGraphicTemplate);
  }

});