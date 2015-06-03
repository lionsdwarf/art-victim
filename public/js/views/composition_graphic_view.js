App.Views.CompositionGraphic = Backbone.View.extend({
  initialize: function() {
    this.graphicTemplate = Handlebars.compile($('#composition-graphic-template').html());
    this.render();
  },

  render: function() {
    var compositionGraphicTemplate = this.graphicTemplate(this.model.toJSON());
    var newCompositionGraphic = this.$el.html(compositionGraphicTemplate);
    //add to array that will define graphics to be saved
    App.placedGraphics.push(this.model.attributes.data_name);
    this.defineEndow(newCompositionGraphic);
  },

  defineEndow: function(newCompositionGraphic) {
      var src = this.model.attributes.url;
      (src.search('/backgrounds') >= 0) ? 
      this.endowFixed(newCompositionGraphic) : this.endowDraggable(newCompositionGraphic);
  },

  endowFixed: function(newCompositionGraphic) {
    newCompositionGraphic.find('img')
      .removeClass('composition-graphic')
      .addClass('composition-background');
  },

  endowDraggable: function(newCompositionGraphic) {
    var compGraphic = newCompositionGraphic.find('img');
    //endow draggable functionality on image elements
    compGraphic.draggable({
      cursor: 'crosshair',
      // containment: '#composition-background'
    });
      // .resizable();
    this.generateSortable();
  },

  generateSortable: function() {
    //generate unique sortable per new composition graphic
    var name = this.model.attributes.data_name;
    var sortable = $('<li>').html(name).prependTo($('#sortables'));
    $(sortable).attr('id', 'sortable' + name);
    $(sortable).attr('data-name', name); 
  }

});