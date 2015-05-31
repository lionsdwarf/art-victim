App.Collections.Libraries = Backbone.Collection.extend({
  initialize: function() {},
  model: App.Models.Library,
  url: '/libraries'
});