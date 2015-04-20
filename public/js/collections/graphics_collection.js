App.Collections.GraphicsCollection = Backbone.Collection.extend({
  initialize: function() {},
  model: App.Models.GraphicModel,
  url: '/graphics'
  // url: '/graphics/libraries/' + name
  // url: '/libraries/2/graphics'
  // url: '/libraries/' + this.collection.id + '/graphics'
});