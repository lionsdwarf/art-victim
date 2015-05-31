App.Collections.LibraryGraphics = Backbone.Collection.extend({
  initialize: function(libraryModel) {
    var graphicUrl = '/libraries/' + libraryModel.attributes.id + '/graphics/';
    this.url = graphicUrl;
  },
  model: App.Models.LibraryGraphic
 
});