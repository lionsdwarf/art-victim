App.Collections.UserCompositions = Backbone.Collection.extend({
  initialize: function() {
    var compositionsUrl = '/users/' + App.currentUser + '/compositions';
    this.url = compositionsUrl;
  }
});