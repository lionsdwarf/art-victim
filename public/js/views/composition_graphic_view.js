App.Views.CompositionGraphicModelView = Backbone.View.extend({
  
  counter: 0,

  initialize: function() {
    this.template = Handlebars.compile($('#composition-graphic-template').html());
    this.render();
  },

  render: function() {
    var compositionGraphicTemplate = this.template(this.model.toJSON());
    var newCompositionGraphic = this.$el.html(compositionGraphicTemplate);
    App.placedGraphics.push(this.model.attributes.name);
    this.defineEndow(newCompositionGraphic);
  },

  defineEndow: function(newCompositionGraphic) {
    var src = this.model.attributes.url;
    (src.search('/backgrounds') >= 0) ? this.endowFixed(newCompositionGraphic) : this.endow(newCompositionGraphic); 
  },

  endowFixed: function(newCompositionGraphic) {
    newCompositionGraphic.find('img')
                                .removeClass('composition-graphic')
                         .addClass('composition-background');
  },

  endow: function(newCompositionGraphic) {
    var compGraphic = newCompositionGraphic.find('img');
    //creates draggable functionality
    compGraphic.draggable();
    // newCompositionGraphic.find('img').resizable();
    this.generateSortable();
  },

  generateSortable: function() {
  //generates unique sortable per new composition graphic
  var name = this.model.attributes.name;
  var sortable = $('<li>').html(name).appendTo($('#sortables'));
  $(sortable).attr('id', 'sortable' + name);
  //identifies sortable's position in sorting list (to correspond w z-index)
  $('#sortables').sortable({ 
    stop: function(event, ui) {
      console.log(ui.item.index());
    }
  });
  
  },



});