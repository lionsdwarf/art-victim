$(function() {

  App.graphicsCollection = new App.Collections.GraphicsCollection;
  App.graphicsCollectionView = new App.Views.GraphicsCollectionView({ collection: App.graphicsCollection });
  App.graphicsCollection.fetch();

   $( "#draggable" ).draggable();

});

var App = {
  Models: {},
  Collections: {},
  Views: {}
}