App.Views.SignupModalView = Backbone.View.extend({
  el: '#signup-modal',

  initialize: function() {
    signupTemplate = Handlebars.compile($('#signup-template').html());
    this.render();
  },

  render: function() {
    this.$el.html(signupTemplate());
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