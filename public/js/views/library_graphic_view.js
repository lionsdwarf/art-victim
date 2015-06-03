App.Views.LibraryGraphic = Backbone.View.extend({
  className: 'graphic-div',
  counter: 0,
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
    this.$el.dblclick(this.cloneModel.bind(this));
  },

  render: function() {
    var libraryGraphicTemplate = this.template(this.model.toJSON());
    this.$el.html(libraryGraphicTemplate);
  },

  cloneModel: function() {
    this.counter++;
    var newModel = new App.Models.CompositionGraphic({
      name: this.model.attributes.name + ' ' + this.counter, 
      data_name: this.model.attributes.name + '-' + this.counter,
      url: this.model.attributes.url,
      library_id: this.model.attributes.library_id,
      type: 'image'
    });
    App.compositionGraphicsCollection.add(newModel);
  }

});
