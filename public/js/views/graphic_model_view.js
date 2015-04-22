App.Views.GraphicModelView = Backbone.View.extend({
  // className: 'graphic',
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

  defineClicked: function() {
    var src = this.model.attributes.url;
    (src.search('/backgrounds') >= 0) ? this.renderBackground() : this.generateGraphic(); 
  },

  renderBackground: function() {
      var background = this.el.cloneNode(true);
      var background = $(background).find('img');

      this.counter++;
      var backgroundId = background.attr('id') + this.counter;
      background.attr('id', backgroundId);

      background.addClass('background savable');

      $('body').append(background);

      $(background).css({
        "top" : "120px",
        "left" : "2000px",
        "marign" : "auto",
        "width" : "auto",
        "position" : "absolute",
        "z-index" : "-2"
      });
      //identifies graphic placed to canvas for saving later
      App.placedGraphics.push(backgroundId);
  },

  generateSortable: function(graphicId) {
    //generates unique sortable per new graphic
    var sortableList = $('#sortable');
    var sortable = $('<li>').html(graphicId).appendTo(sortableList);
    $(sortable).attr('id', 'sortable' + graphicId);
    //identifies sortable's position in sorting list (to correspond w z-index)
    sortableList.sortable({ 
      stop: function(event, ui) {
        console.log(ui.item.index());
      }
    });
         $(sortableList).css({
        "top" : "150px",
        "right" : "450px",
        "width" : "150px",
        "position" : "absolute"
      });    
  },

  generateGraphic: function() {
      //clones the graphic
      var graphic = this.el.cloneNode(true);
      var graphic = $(graphic).find('img');
      //adds a unique id
      this.counter++;
      var graphicId = graphic.attr('id') + this.counter;
      graphic.attr('id', graphicId);
      
      // var graphicName = this.model.attributes.name;
      graphic.addClass('graphic savable');

      //adds draggable functionality & appends to canvas
      graphic.draggable();
      $('body').append(graphic);
     
      
      $(graphic).css({
        "top" : "150px",
        "left" : "2000px",
        "marign" : "auto",
        "width" : "auto",
        "position" : "absolute"
      });
 

    $('.graphic').on( "dblclick", function() {
      $( this ).css({
        width: function( index, value ) {
          return parseFloat( value ) * 1.04;
        },
        height: function( index, value ) {
          return parseFloat( value ) * 1.04;
        }
      });
    });
    this.generateSortable(graphicId);
    App.placedGraphics.push(graphicId);
  }

});






