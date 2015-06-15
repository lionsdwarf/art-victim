App.Models.UserComposition = Backbone.Model.extend({
  initialize: function() {
    var compositionsUrl = '/users/' + App.currentUser + '/compositions';
    this.url = compositionsUrl;
  }
});