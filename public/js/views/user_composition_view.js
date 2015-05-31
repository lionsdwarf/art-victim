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
    App.compositionGraphicsCollection = new App.Collections.CompositionGraphics;
    App.compositionGraphicsCollectionView = new App.Views.CompositionGraphics({
      collection: App.compositionGraphicsCollection
    });
    var compositionArray = this.model.attributes.composition;
    compositionArray = JSON.parse(compositionArray);
    for (var i = 0; i < compositionArray.length; i++) {
      var graphicModel = compositionArray[i];
      App.compositionGraphicsCollection.add(graphicModel); 
    }
  }

});