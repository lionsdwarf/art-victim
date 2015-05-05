$(function() {

  App.librariesCollection = new App.Collections.LibrariesCollection;
  App.librariesCollectionView = new App.Views.LibrariesCollectionView({ collection: App.librariesCollection});
  App.librariesCollection.fetch();
  
  App.homeView = new App.Views.HomeView;
  App.loginModal = new App.Views.LoginModal;
  
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  placedGraphics: [],
  savedComposition: [],
  currentUser: []
}

