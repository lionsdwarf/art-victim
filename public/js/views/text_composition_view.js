App.Views.TextComposition = Backbone.View.extend({
  counter: 0,
  initialize: function() {
    $('#submit-text').on('click', this.generateTextModel.bind(this));
  },

  generateTextModel: function() {
    this.counter += 1;
    var userInput = $('#input-text').val();
    var dataName = userInput.replace(/\W/g, '') + '-' + this.counter;
    var newModel = new App.Models.CompositionText({
      data_name: dataName,
      name: userInput + ' ' + this.counter,
      user_input: userInput,
      type: 'text'
    });
    App.compositionGraphicsCollection.add(newModel);
  }

});