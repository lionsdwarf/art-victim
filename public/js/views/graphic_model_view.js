App.Views.GraphicModelView = Backbone.View.extend({
  className: 'graphic',
  counter: 0,
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
    this.$el.dblclick(this.defineClicked.bind(this));
  },

  render: function() {
    var graphicTemplate = this.template(this.model.toJSON());
    this.$el.html(graphicTemplate);
  },

  createSortables: function() {},

  defineClicked: function() {
    var src = this.model.attributes.url;
    (src.search('/backgrounds') >= 0) ? this.renderBackground() : this.renderGraphic(); 
  },

  renderBackground: function() {
      var background = this.el.cloneNode(true);
      // $(background).attr('class', 'top-pad-' + this.counter);
      $('body').append(background);

      $(background).css({
        "top" : "120px",
        "left" : "2000px",
        "marign" : "auto",
        "width" : "auto",
        "position" : "absolute",
        "z-index" : "-2"
      });
  },

  renderGraphic: function() {
      //clones the graphic
      var graphic = this.el.cloneNode(true);
      //adds a unique id
      var graphicId = $(graphic).find('img').attr('id');
      this.counter++;
      $(graphic).find('img').attr('id', graphicId + this.counter);
      //adds draggable functionality & appends to canvas
      $(graphic).draggable();
      $('body').append(graphic);
      //generates unique sortable per new graphic
      var sortableList = $('#sortable');
      var sortable = $('<li>').html('LI').appendTo(sortableList);
      $(sortable).attr('id', 'sortable' + graphicId + this.counter);
      //identifies sortable's position in sorting list (to correspond w z-index)
      sortableList.sortable({ 
        stop: function(event, ui) {
          console.log(ui.item.index());
        }
      });
      
      $(graphic).css({
        "top" : "150px",
        "left" : "2000px",
        "marign" : "auto",
        "width" : "auto",
        "position" : "absolute"
      });
      $(sortableList).css({
        "top" : "150px",
        "right" : "450px",
        "width" : "150px",
        "position" : "absolute"
      });
  }

});






