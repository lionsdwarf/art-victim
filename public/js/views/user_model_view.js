App.Views.UserModelView = Backbone.View.extend({
  el:'#session',

  initialize: function() {},

  events: {
    'click #logout' : 'logoutUser'
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

        composedGraphic = JSON.stringify(composedGraphic);
        App.savedComposition.push(composedGraphic);
      }
    recorder.saveComposition();
  },

  saveComposition: function() {
    var title = $('#title').val();
    var composition = App.savedComposition;
    $.ajax({ 
        url: '/users/3/compositions',
        method: 'POST',
        data: {
            title: title,
            composition: composition,
            user_id: 3
        }
    });
  },

  logoutUser: function() {

    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
      })
        .done(App.homeView.fetchAndRenderSession);
  }

});