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
    'click .home-close' : 'hideModals'
  },

  fetchAndRenderSession: function() {
    $.get('/users/current_user').done(function(user) {
      if (user) {
        new App.Views.User({ model: user });
      } else {
        $('#login').html(loginLink());
        // $('#signup').html(signupLink());
        App.loginModal = new App.Views.LoginModal;
        App.signupModal = new App.Views.SignupModal;
      }
    }).fail(function(jqXHR) {
        if (jqXHR.status === 404) {
          alert('error');
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

  hideModals: function() {
    App.loginModal.close();
    App.signupModal.close();    
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
      });  
    $('#login-username').val('');
    $('#login-password').val('');
    this.hideModals();
  },

  login: function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    this.loginUser(username, password);
  },

  signup: function() {
    var username = $('#signup-username').val();
    var email = $('#signup-email').val();
    var password = $('#signup-password').val();
    var passwordConf = $('#password-conf').val();
    var thisPasser = this;

    if (password === passwordConf) {
      App.newUser = new App.Models.User();
      App.newUser.save({
          username: username,
          email: email,
          password: password
        },
        {
          success: function(model, response) {
            thisPasser.loginUser(username, password);
          },
          error: function(model, response) {
            console.log(model.toJSON());
            alert('There was a problem.')
          }
      });
    }
    else {
      alert('Password and password confirmation must match.');
      var password = $('#signup-password').val('');
      var passwordConf = $('#password-conf').val('');
    }
  }

});