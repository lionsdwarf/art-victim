$(function() {

  App.librariesCollection = new App.Collections.LibrariesCollection;
  App.librariesCollectionView = new App.Views.LibrariesCollectionView({ collection: App.librariesCollection
  });
  App.librariesCollection.fetch();

  App.compositionGraphicsCollection = new App.Collections.CompositionGraphicsCollection;
  App.compositionGraphicsCollectionView = new App.Views.CompositionGraphicsCollectionView({
    collection: App.compositionGraphicsCollection
  });
  
  App.homeView = new App.Views.HomeView;
  
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  placedGraphics: [],
  savedComposition: [],
  currentUser: []
}

