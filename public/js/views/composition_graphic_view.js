App.Views.CompositionGraphic = Backbone.View.extend({
  initialize: function() {
    this.graphicTemplate = Handlebars.compile($('#composition-graphic-template').html());
    this.el = $(this.graphicTemplate(this.model.toJSON()))
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
      this.endowFixed(newCompositionGraphic) : this.generateSortable(newCompositionGraphic);
  },

  endowFixed: function(newCompositionGraphic) {
    newCompositionGraphic.find('img')
      .removeClass('composition-graphic')
      .addClass('composition-background');
  },

  generateSortable: function(newCompositionGraphic) {
    //generate unique sortable per new composition graphic
    var data_name = this.model.attributes.data_name;
    var name = this.model.attributes.name;
    var sortable = $('<li>').html(name).prependTo($('#sortables'));
    $(sortable).attr('id', 'sortable' + data_name);
    $(sortable).attr('data-name', data_name); 
    setTimeout(function() { this.setZIndex(newCompositionGraphic) }.bind(this), 150);
  },

  setZIndex: function(newCompositionGraphic) {
    var layerOrder = $('#sortables').sortable('toArray', {attribute: 'data-name'});
    App.layerOrder = layerOrder;
    layerOrder = layerOrder.reverse();
    //set z-indeces according to array order
    for (i = 0; i < layerOrder.length; i++) {
      var name = layerOrder[i];
      $('#' + name).css('z-index', i);
    }
    this.endowDraggable(newCompositionGraphic);
  },

  endowDraggable: function(newCompositionGraphic) {
    var compGraphic = '#' + newCompositionGraphic.find('img').attr('id');
    var compGraphic = $(compGraphic);
    //endow draggable functionality on image elements
     compGraphic.draggable({
      cursor: 'crosshair',
      // containment: '#composition-background'
    });
      // .resizable();
  }

});