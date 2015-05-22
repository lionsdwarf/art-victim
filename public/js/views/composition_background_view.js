App.Views.CompositionBackgroundModelView = Backbone.View.extend({

  initialize: function() {
    this.template = Handlebars.compile($('#composition-background-template').html());
    this.render();
  },

  render: function() {
    var compositionBackgroundTemplate = this.template(this.model.toJSON());
    var newCompositionBackground = this.$el.html(compositionBackgroundTemplate);
    // this.endow(newCompositionBackground);
  },

  endow: function(newCompositionBackground) {
    var compBackground = newCompositionBackground.find('img');
  }

});