App.Views.User = Backbone.View.extend({
  el:'#session',

  initialize: function() {
    this.userTemplate = Handlebars.compile($('#user-template').html());
    this.saveTemplate = Handlebars.compile($('#save-template').html());
    this.compositionsTemplate = Handlebars.compile($('#compositions-template').html());
    $('#session').html(this.userTemplate(this.model.id));
    App.currentUser = this.model.id;
    this.renderCompositionsModal();
    this.hideCompositionsModal();
    this.loadCompositions();
  },

  events: {
    'click #logout' : 'logoutUser',
    'click #save' : 'renderSaveModal',
    'click #save-to-db' : 'saveComposition',
    'click #email' : 'emailComposition',
    'click .save-close' : 'closeModals',
    'click #load' : 'showCompositionsModal',
    'click .compositions-close' : 'hideCompositionsModal'
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
    $('#save-template-el').html(this.saveTemplate());
  },

  hideCompositionsModal: function() {
    $('#compositions-template-el').hide();
  },

  showCompositionsModal: function() {
    $('#compositions-template-el').show();
  },

  renderCompositionsModal: function() {
    $('#compositions-template-el').html(this.compositionsTemplate());
  },

  logoutUser: function() {
    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
      })
        .done(function() {
          App.homeView.fetchAndRenderSession();
        });
  },

  emailComposition: function() {
    alert('Email functionality coming soon!');
    // App.emailComposition = new App.Views.EmailComposition;
  },

  closeModals: function() {
    $('#session').html(this.userTemplate());
  }

});
