App.Views.TextComposition = Backbone.View.extend({
  counter: 0,
  initialize: function() {
    $('#submit-text').on('click', this.generateTextModel);
  },

  generateTextModel: function() {
    debugger;
    this.counter++;
    var newModel = new App.Models.CompositionText({
      data_name: $('#input-text').val() + '-' + this.counter,
      name: $('#input-text').val() + ' ' + this.counter,
      user_input: $('#input-text').val(),
      type: 'canvas'
    });
    App.compositionGraphicsCollection.add(newModel);
  }

});