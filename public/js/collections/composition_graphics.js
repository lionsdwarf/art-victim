App.Collections.CompositionGraphics = Backbone.Collection.extend({
  initialize: function() {
    this.setUrl();
  },

  setUrl: function() {
    var newUrl = '/users/' + App.currentUser + '/compositions/' + App.currentComposition + '/composition_graphics';
    this.url = newUrl;
  }
});