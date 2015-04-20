App.Views.GraphicModelView = Backbone.View.extend({
  className: 'graphic',
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
    this.$el.dblclick(this.renderToCanvas);
  },
  render: function() {
    var graphicTemplate = this.template(this.model.toJSON());
    this.$el.html(graphicTemplate);
  },
  createSortables: function() {
    

  },
  renderToCanvas: function(graphicModel) {
    var clone = this.cloneNode(true);
    $(clone).draggable();
    $('#canvas').append(clone);
    // this.createSortables();
    // clone.$el.attr('id', 'top-pad-' + this.counter);

    var sortableList = $('#sortable');
    var sortable = $('<li>').html('LI').appendTo(sortableList);
    sortableList.sortable({ 
      stop: function(event, ui) {
        console.log(ui.item.index());
      }
    });
    //set z-indices .zIndex(zindex) to sortable order (ui.item.index())
    
  }

});






