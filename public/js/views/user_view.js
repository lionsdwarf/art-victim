App.Views.User = Backbone.View.extend({
  el:'#session',

  initialize: function() {
    this.userTemplate = Handlebars.compile($('#user-template').html());
    this.saveTemplate = Handlebars.compile($('#save-template').html());
    $('#session').html(this.userTemplate(this.model.id));
    App.currentUser = this.model.id;
    this.loadCompositions();
    $('#email').on('click', this.emailComposition);
  },

  events: {
    'click #logout' : 'logoutUser',
    'click #user-save' : 'renderSaveModal',
    'click #save-to-db' : 'saveComposition'
  },

  loadCompositions: function() {
    App.userCompositionsCollection = new App.Collections.UserCompositions;
    App.userCompositionsCollectionView = new App.Views.UserCompositions({ 
      collection: App.userCompositionsCollection });
    App.userCompositionsCollection.fetch();
  },

  saveComposition: function() {
    var userCompositionModel = new App.Models.UserComposition;
    var userCompositionView = new App.Views.UserComposition({ model: userCompositionModel });
    userCompositionView.saveNew();
  },

  renderSaveModal: function() {
    $('#session').html(this.saveTemplate());
  },

  logoutUser: function() {
    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
      })
        .done(App.homeView.fetchAndRenderSession);
  },

  emailComposition: function() {
    App.emailComposition = new App.Views.EmailComposition;
  }

});
