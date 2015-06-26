$(function() {

  App.librariesCollection = new App.Collections.Libraries;
  App.librariesCollectionView = new App.Views.Libraries({ collection: App.librariesCollection
  });
  App.librariesCollection.fetch();

  App.compositionGraphicsCollection = new App.Collections.CompositionGraphics;
  App.compositionGraphicsView = new App.Views.CompositionGraphics({
    collection: App.compositionGraphicsCollection
  });

  App.textCompositionView = new App.Views.TextComposition;
  App.homeView = new App.Views.Home;

  editCompositionGraphic();

  setTimeout(function() {$( '#tabs').tabs()}, 200);
  
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  layerOrder: [],
  compositionViews: [],
  compositionBackground: null,
  currentUser: null,
  currentComposition: null
}

