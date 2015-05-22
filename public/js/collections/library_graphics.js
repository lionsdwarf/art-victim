App.Collections.LibraryGraphicsCollection = Backbone.Collection.extend({
  initialize: function(libraryModel) {
    var newUrl = '/libraries/' + libraryModel.attributes.id + '/graphics/';
    this.url = newUrl;
  },
  model: App.Models.LibraryGraphicModel
 
});