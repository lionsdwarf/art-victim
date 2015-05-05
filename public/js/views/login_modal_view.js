App.Views.LoginModal = Backbone.View.extend({
  el: '#modals',

  initialize: function() {
    loginTemplate = Handlebars.compile($('#login-template').html());
    this.renderLoginModal();
  },

  renderLoginModal: function() {
    $('#login').html(loginTemplate());
    // this.hideModal();
  },

  showModal: function() {
    console.log('loginModal show')
    this.$el.fadeIn(500);
  },

  hideModal: function() {
    this.$el.hide();
  }

});