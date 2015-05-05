App.Collections.GraphicsCollection = Backbone.Collection.extend({
  initialize: function(libraryModel) {
    var newUrl = '/libraries/' + libraryModel.attributes.id + '/graphics/';
    this.url = newUrl;
    console.log(this.url)
  },
  model: App.Models.GraphicModel
 
});