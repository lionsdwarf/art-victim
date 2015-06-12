App.Collections.LibraryGraphics = Backbone.Collection.extend({
  initialize: function(libraryModel) {
    var graphicUrl = '/libraries/' + libraryModel.attributes.id + '/library_graphics/';
    this.url = graphicUrl;
  },
  model: App.Models.LibraryGraphic
 
});