App.Views.CompositionGraphic = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-graphic-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    var compositionGraphicTemplate = this.template(this.model.toJSON());
    var newCompositionGraphic = this.$el.html(compositionGraphicTemplate);
    //add to array that will define graphics to be saved
    // App.placedGraphics.push(this.model.attributes.data_name);
    // this.defineEndow(newCompositionGraphic);
    this.generateSortable();
    setTimeout(function() { this.endowFunctionality() }.bind(this), 50);
  },

  generateSortable: function() {
    //generate unique sortable per new composition graphic
    var newSortableView = new App.Views.Sortable({ model: this.model });
    this.$el.append(newSortableView.el);
  },

  endowFunctionality: function() {
    var graphicId = this.model.attributes.data_name;
    var graphicImg = $('#' + graphicId);

    var height = 250;
    var delta = height / parseInt(graphicImg.css('height'));
    var width = delta * parseInt(graphicImg.css('width')) + 'px';
    var height = height + 'px';

    graphicImg
      .resizable()
      .css({'height' : height, 'width' : width});

    var graphicDiv = graphicImg.parent();

    graphicDiv
      .draggable({
        cursor: 'crosshair',
        containment: 'parent'
      })
      .css({'height' : height, 'width' : width})
      ;

    var graphicDivId = 'div-' + graphicId;
    graphicDiv.attr('id', graphicDivId);

    this.setZIndex();
  },

  setZIndex: function() {
    var layerOrder = $('#sortables').sortable('toArray', {attribute: 'data-name'});
    App.layerOrder = layerOrder;
    layerOrder = layerOrder.reverse();
    //set z-indeces according to array order
    for (i = 0; i < layerOrder.length; i++) {
      var graphic = layerOrder[i];
      $('#div-' + graphic).css('z-index', i);
    }
  }

});