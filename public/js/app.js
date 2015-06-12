$(function() {

  App.librariesCollection = new App.Collections.Libraries;
  App.librariesCollectionView = new App.Views.Libraries({ collection: App.librariesCollection
  });
  App.librariesCollection.fetch();

  App.compositionGraphicsCollection = new App.Collections.CompositionGraphics;
  App.compositionGraphicsCollectionView = new App.Views.CompositionGraphics({
    collection: App.compositionGraphicsCollection
  });

  App.textCompositionView = new App.Views.TextComposition;
  App.homeView = new App.Views.Home;

  editCompositionGraphic();
  
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  placedGraphics: [],
  placedText: [],
  layerOrder: [],
  savedComposition: [],
  currentUser: null,
  currentComposition: null
}

