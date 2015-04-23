App.Views.HomeView = Backbone.View.extend({
  el: '#session',

  initialize: function() {
    loginSignupTemplate = Handlebars.compile($('#login-signup-template').html());
    this.fetchAndRenderSession();
  },

  events: {
    'click #signup-button' : 'signup',
    'click #login-button' : 'login'
  },

  fetchAndRenderSession: function() {
    $.get('/users/current_user').done(function(user) {
      if (user) {
        var userModel = new App.Models.UserModel({ id: user.id });  
        new App.Views.UserModelView({ model: userModel });
        var userCompositionsCollection = new App.Collections.UserCompositionsCollection;
        new App.Views.UserCompositionsCollectionView({ collection: userCompositionsCollection });
        userCompositionsCollection.fetch();
      } else {
        $('#session').html(loginSignupTemplate());
      }
    })
      .fail(function(jqXHR) {
        if (jqXHR.status === 404) {
          $('#session').html('Work In Progress');
        }
      });
  },

  loginUser: function(username, password) {
    
    $.post('/users/sessions', {
      username: username,
      password: password
    })
      .done(this.fetchAndRenderSession)
      .fail(function(response) {
        var err = response.responseJSON;
        alert(err.err + ' - ' + err.msg);
      });;  
  },

  login: function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    this.loginUser(username, password);
  },

  signup: function() {
    var username = $('#signup-username').val();
    var password = $('#signup-password').val();
    var thisPasser = this;

    $.post('/users', {
      username: username,
      password: password
    })
      .done(function() {
        thisPasser.loginUser(username, password);
        $('#signup-username').val('');
        $('#signup-password').val('');
      })
      .error(function(response, stuff) {
        var err = response.responseJSON;
        alert(err.err + ' - ' + err.msg);
      });
  }

});