App.Collections.UserCompositionsCollection = Backbone.Collection.extend({
  initialize: function() {},
  url: '/users/19/compositions',
  model: App.Models.UserCompositionModel,
});