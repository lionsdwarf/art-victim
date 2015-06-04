App.Views.TextComposition = Backbone.View.extend({
  counter: 0,
  initialize: function() {
    $('#submit-text').on('click', this.generateTextModel);
  },

  generateTextModel: function() {
    this.counter++;
    var userInput = $('#input-text').val();
    //var width = ctx.measureText(userInput).width;
    var newModel = new App.Models.CompositionText({
      data_name: encodeURI(userInput) + '-' + this.counter,
      name: $('#input-text').val() + ' ' + this.counter,
      user_input: userInput,
      type: 'canvas'
    });
    App.compositionGraphicsCollection.add(newModel);
  }

});