App.Views.HomeView = Backbone.View.extend({
  el: "#home-view",

  initialize: function() {
    this.fetchAndRenderSession();
    userTemplate = Handlebars.compile($('#user-template').html());
    loginSignupTemplate = Handlebars.compile($('#login-signup-template').html());
  },

  fetchAndRenderSession: function() {
    console.log('sesh fetch n rnd')
    $.get('/users/current_user').done(function(user) {
      if (user) {
        $('#session').html(userTemplate(user));
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
      .done(fetchAndRenderSession)
      .fail(function(response) {
        var err = response.responseJSON;
        alert(err.err + ' - ' + err.msg);
      });;  
  },

  login: function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    loginUser(username, password);
  },

  signup: function() {
    var username = $('#signup-username').val();
    var password = $('#signup-password').val();

    $.post('/users', {
      username: username,
      password: password
    })
      .done(function() {
        loginUser(username, password);
        $('#signup-username').val('');
        $('#signup-password').val('');
      })
      .error(function(response, stuff) {
        var err = response.responseJSON;
        alert(err.err + ' - ' + err.msg);
      });
  }
});