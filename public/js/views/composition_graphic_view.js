App.Views.CompositionGraphic = Backbone.View.extend({
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
    (src.search('/backgrounds') >= 0) ? this.endowFixed(newCompositionGraphic) : this.endowDraggable(newCompositionGraphic); 
  },

  endowFixed: function(newCompositionGraphic) {
    newCompositionGraphic.find('img')
      .removeClass('composition-graphic')
      .addClass('composition-background');
  },

  endowDraggable: function(newCompositionGraphic) {
    var compGraphic = newCompositionGraphic.find('img');
    //endow draggable functionality on image elements
    compGraphic.draggable();
    // compGraphic.resizable();
    App.zIndexCounter++;
    compGraphic.css('z-index', App.zIndexCounter);
    this.generateSortable();

  },

  generateSortable: function() {
    //generate unique sortable per new composition graphic
    var name = this.model.attributes.name;
    var sortable = $('<li>').html(name).prependTo($('#sortables'));
    $(sortable).attr('id', 'sortable' + name);
    $(sortable).attr('data-name', name); 
  }

});