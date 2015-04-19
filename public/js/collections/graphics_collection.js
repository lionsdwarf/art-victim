App.Collections.GraphicsCollection = Backbone.Collection.extend({
  initialize: function() {},
  model: App.Models.GraphicModel,
  url: '/graphics'
});