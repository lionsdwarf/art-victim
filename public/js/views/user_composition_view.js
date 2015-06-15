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
    App.compositionGraphicsView = new App.Views.CompositionGraphics({
      collection: App.compositionGraphicsCollection
    });
    App.compositionGraphicsCollection.fetch();
  },

  saveNew: function() {
    var name = $('#title').val();
    var dataName = name.replace(/\s/g,'');

    this.model.save({
      name : name,
      data_name : dataName
    }, {
      success: function(model, response) {
        App.currentComposition = model.attributes.id
      }, 
      error: function() {
        console.log('composition save failure');
      }
    });
    setTimeout(function() { App.compositionGraphicsView.setAttributes() }, 100);
    setTimeout(function() { App.compositionGraphicsCollection.setUrl() }, 100);
    // App.compositionGraphicsCollection.setUrl()
    setTimeout(function() { App.compositionGraphicsView.save() }, 100);
    // App.compositionGraphicsView.save();
  }
});