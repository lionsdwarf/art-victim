App.Collections.LibrariesCollection = Backbone.Collection.extend({
  initialize: function() {},
  model: App.Models.LibraryModel,
  url: '/libraries'
});