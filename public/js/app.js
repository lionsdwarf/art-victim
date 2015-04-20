$(function() {

  App.librariesCollection = new App.Collections.LibrariesCollection;
  App.librariesCollectionView = new App.Views.LibrariesCollectionView({ collection: App.librariesCollection});
  App.librariesCollection.fetch();

  App.graphicsCollection = new App.Collections.GraphicsCollection;
  App.graphicsCollectionView = new App.Views.GraphicsCollectionView({ collection: App.graphicsCollection });
  App.graphicsCollection.fetch();

  $('.draggable').draggable();
  $('#droppable').droppable();


});

var App = {
  Models: {},
  Collections: {},
  Views: {}
}