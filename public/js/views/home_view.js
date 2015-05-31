App.Views.Home = Backbone.View.extend({
  el: '#session',

  initialize: function() {
    loginLink = Handlebars.compile($('#login-link').html());
    signupLink = Handlebars.compile($('#signup-link').html());
    signupTemplate = Handlebars.compile($('#signup-template').html());
    this.fetchAndRenderSession();
  },

  events: {
    'click #signup-button' : 'signup',
    'click #login-button' : 'login',
    'click #login' : 'showLoginModal',
    'click #sign-up-link' : 'showSignupModal',
    'click #log-in-link' : 'showLoginModal',
  },

  fetchAndRenderSession: function() {
    $.get('/users/current_user').done(function(user) {
      if (user) {
        var userModel = new App.Models.User({ id: user.id });  
        new App.Views.User({ model: userModel });
      } else {
        $('#login').html(loginLink());
        $('#signup').html(signupLink());
        App.loginModal = new App.Views.LoginModal;
        App.signupModal = new App.Views.SignupModal;
      }
    }).fail(function(jqXHR) {
        if (jqXHR.status === 404) {
          $('#session').html('Work In Progress');
        }
      });
  },

  showLoginModal: function() {
    App.signupModal.fadeOut();
    App.loginModal.show();
  },

  showSignupModal: function() {
    App.loginModal.fadeOut();
    App.signupModal.show();
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