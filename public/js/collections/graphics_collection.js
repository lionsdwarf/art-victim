App.Collections.GraphicsCollection = Backbone.Collection.extend({
  initialize: function(libraryModel) {
    var newUrl = '/libraries/' + libraryModel.attributes.id + '/graphics/';
    this.url = newUrl;
  },
  model: App.Models.GraphicModel
 
});