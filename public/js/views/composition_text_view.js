App.Views.CompositionText = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-text-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    var compositionTextTemplate = this.template(this.model.toJSON());
    var newCompositionText = this.$el.html(compositionTextTemplate);
    this.generateSortable();
    setTimeout(function() { this.paintText(); }.bind(this), 50);
    // this.paintText();
    $('#input-text').val('');
    if (this.model.attributes.id) {
      setTimeout(function() { this.endowPersisted() }.bind(this), 50);
    }
    else {
      setTimeout(function() { this.endowNew() }.bind(this), 50);
    }
  },

  paintText: function() {
    var canvasId = this.model.attributes.data_name;
    var userInput = this.model.attributes.user_input;
    var canvas = document.getElementById(canvasId);
    // var jqCanvas = $('#' + canvasId);
    var ctx = canvas.getContext('2d');
    ctx.font = '60px Special Elite, cursive';
    ctx.fillStyle = 'white';
    // var width = parseInt(ctx.measureText(userInput).width);
    // jqCanvas.css('width', width);
    ctx.fillText(userInput, 10, 50);
  },

  generateSortable: function() {
    var newSortableView = new App.Views.Sortable({ model: this.model });
    this.$el.append(newSortableView.el)
  },

  endowPersisted: function() {
    var graphicId = this.model.attributes.data_name;
    var graphicImg = $('#' + graphicId);

    var height = this.model.attributes.height + 'px';
    var width = this.model.attributes.width + 'px';
    var left = this.model.attributes.left + 'px';
    var top = this.model.attributes.top + 'px';

    graphicImg
      .resizable()
      .css({'height' : height, 'width' : width});

    var graphicDiv = graphicImg.parent();

    graphicDiv
      .draggable({
        cursor: 'crosshair',
        containment: 'parent'
      })
      .css({
        'height' : height, 
        'width' : width, 
        'left' : left, 
        'top' : top})
      ;

    var graphicDivId = 'div-' + graphicId;
    graphicDiv.attr('id', graphicDivId);

    this.setZIndex();
  },

  endowNew: function() {
    var graphicId = this.model.attributes.data_name;
    var graphicImg = $('#' + graphicId);

    // var height = 250;
    // var delta = height / parseInt(graphicImg.css('height'));
    // var width = delta * parseInt(graphicImg.css('width')) + 'px';
    // var height = height + 'px';

    graphicImg
      .resizable();
      // .css({'width' : '400px'});

    var graphicDiv = graphicImg.parent();

    graphicDiv
      .draggable({
        cursor: 'crosshair',
        containment: 'parent'
      })
      .css({
        'left' : '300px', 
        'top' : '200px', 
        'overflow' : ''})
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
  },

  setAttributes: function() {
    var graphicDataName = this.model.attributes.data_name;
    var graphicId = '#' + graphicDataName;
    var graphicDivId = '#div-' + graphicDataName;
    
    this.model.set({
      z_index : parseInt($(graphicDivId).css('z-index')),
      top : parseInt($(graphicDivId).css('top')),
      left : parseInt($(graphicDivId).css('left')),
      width : $(graphicId).width(),
      height : $(graphicId).height(),
      composition_id : App.currentComposition
    });
  },

  save: function() {
    this.model.save();
  }

});