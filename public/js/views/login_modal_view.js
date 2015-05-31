App.Views.LoginModal = Backbone.View.extend({
  el: '#login-modal',

  initialize: function() {
    loginTemplate = Handlebars.compile($('#login-template').html());
    this.render();
  },

  render: function() {
    this.$el.html(loginTemplate());
    this.hide();
  },

  show: function() {
    this.$el.fadeIn(500);
  },

  hide: function() {
    this.$el.hide();
  },

  fadeOut: function() {
    this.$el.fadeOut(500);
  }

});