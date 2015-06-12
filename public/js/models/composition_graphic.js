App.Models.CompositionGraphic = Backbone.Model.extend({
  initialize: function() {
    var compositionsUrl = '/users/' + App.currentUser + '/compositions/' + 
    App.currentComposition
    // 15
     + '/composition_graphics';
    this.url = compositionsUrl;
  }
});