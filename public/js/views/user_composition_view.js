App.Views.UserComposition = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-title').html());
    this.render();
  },

  events: { 
    'dblclick'  : 'loadComposition'
  },

  render: function() {
    var titleTemplate = this.template(this.model.toJSON());
    this.$el.html(titleTemplate);
  },

  loadComposition: function() {
    App.currentComposition = this.model.attributes.id;
    App.compositionGraphicsCollection = new App.Collections.CompositionGraphics;
    App.compositionGraphicsCollectionView = new App.Views.CompositionGraphics({
      collection: App.compositionGraphicsCollection
    });
    App.compositionGraphicsCollection.fetch();

  }
});