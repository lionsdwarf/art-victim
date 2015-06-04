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
    'click #save-to-db' : 'recordComposition'
  },

  loadCompositions: function() {
    App.userCompositionsCollection = new App.Collections.UserCompositions;
    App.userCompositionsCollectionView = new App.Views.UserCompositions({ 
      collection: App.userCompositionsCollection });
    App.userCompositionsCollection.fetch();
  },

  recordComposition: function() {
    App.savedComposition = [];
    var graphicArray = App.placedGraphics;
    var textArray = App.placedText;

      for (var i = 0; i < graphicArray.length; i++) {
        var composedGraphic = {};
        var graphic = "[id=" + '"' + graphicArray[i] + '"' + "]";
        var style = 
          "width: " + $(graphic).width() + "px; " +
          "height: " + $(graphic).height() + "px; " +
          "left: " + $(graphic).position().left + "px; " +
          "top: " + $(graphic).position().top + "px; " +
          "z-index: " + $(graphic).css('z-index') + "; " +
          "position: absolute;"
        composedGraphic.data_name = graphicArray[i];
        composedGraphic.name = $(graphic).attr('alt');
        composedGraphic.url = $(graphic).data('url');
        composedGraphic.style = style;
        composedGraphic.type = 'image';
        App.savedComposition.push(composedGraphic);
      }

      for (var i = 0; i < textArray.length; i++) {
        var composedText = {};
        var text = "[id=" + '"' + textArray[i] + '"' + "]";
        var style = 
          "width: " + $(text).width() + "px; " +
          "height: " + $(text).height() + "px; " +
          "left: " + $(text).position().left + "px; " +
          "top: " + $(text).position().top + "px; " +
          "z-index: " + $(text).css('z-index') + "; " +
          "position: absolute;"
        composedText.data_name = textArray[i];
        composedText.name = $(text).attr('alt');
        composedText.style = style;
        composedText.user_input = $(text).data('text');
        composedText.type = 'canvas';
        App.savedComposition.push(composedText);
      }
    this.saveComposition();
    $('#session').html(this.userTemplate(this.model.id));
    App.userCompositionsCollection.fetch();
  },

  saveComposition: function() {
    var title = $('#title').val();
    var composition = App.savedComposition;
    var stringifiedComposition = JSON.stringify(composition);
    var userId = this.model.id;
    var url = '/users/' + userId + '/compositions';

    $.ajax({ 
        url: url,
        method: 'POST',
        data: {
            title: title,
            composition: stringifiedComposition,
            user_id: userId
        }
    });
    
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
