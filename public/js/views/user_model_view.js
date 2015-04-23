App.Views.UserModelView = Backbone.View.extend({
  el:'#session',

  initialize: function() {
    this.userTemplate = Handlebars.compile($('#user-template').html());
    this.saveTemplate = Handlebars.compile($('#save-template').html());
    $('#session').html(this.userTemplate(this.model.id));
    App.currentUser = this.model.id;
  },

  events: {
    'click #logout' : 'logoutUser',
    'click #user-save' : 'renderSaveModal',
    'click #save-to-db' : 'recordComposition'
  },

  recordComposition: function() {
    App.savedComposition = [];
    var array = App.placedGraphics;
      for (var i = 0; i < array.length; i++ ) {
        var composedGraphic = {};
        var graphic = "[id=" + '"' + array[i] + '"' + "]";
 
        composedGraphic.name = array[i];
        composedGraphic.url = $(graphic).data('url');
        composedGraphic.style = 
          "width: " + $(graphic).width() + "px; " +
          "height: " + $(graphic).height() + "px; " +
          "left: " + $(graphic).position().left + "px; " +
          "top: " + $(graphic).position().top + "px; " +
          "z-index: " + $(graphic).css('z-index') + "; " +
          "position: absolute;";

        // composedGraphic = JSON.stringify(composedGraphic);
        App.savedComposition.push(composedGraphic);
      }
    this.saveComposition();
    $('#session').html(this.userTemplate(this.model.id))
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
  }

});