App.Collections.CompositionGraphics = Backbone.Collection.extend({
  initialize: function() {
    var cgUrl = '/users/' + App.currentUser + '/compositions/' + App.currentComposition + '/composition_graphics';
    this.url = cgUrl;
  }
});