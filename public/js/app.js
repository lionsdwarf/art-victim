$(function() {

  App.librariesCollection = new App.Collections.LibrariesCollection;
  App.librariesCollectionView = new App.Views.LibrariesCollectionView({ collection: App.librariesCollection});
  App.librariesCollection.fetch();

  App.graphicsCollection = new App.Collections.GraphicsCollection;
  App.graphicsCollectionView = new App.Views.GraphicsCollectionView({ collection: App.graphicsCollection });
  App.graphicsCollection.fetch();
  
  App.home = new App.Views.HomeView;

  $('#save').click(recorder.recordComposition);

  
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  placedGraphics: [],
  savedComposition: []
}