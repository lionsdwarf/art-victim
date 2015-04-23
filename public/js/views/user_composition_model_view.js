App.Views.UserCompositionModelView = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-template').html());
    this.renderComposedImage();
  },

  renderComposedImage: function() {
    debugger;
    var compositionArray = JSON.parse(this.model.attributes.composition);
    console.log(compositionArray);
      

    for (var i = 0; i < compositionArray.length; i++);
      var composedImg = compositionArray[i];
      console.log(composedImg)
      var compositionTemplate = this.template(composedImg);
      this.$el.html(compositionTemplate);
  }
});