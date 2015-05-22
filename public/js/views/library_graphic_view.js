App.Views.LibraryGraphicModelView = Backbone.View.extend({
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
    var newModel = new App.Models.CompositionGraphicModel({ 
      name: this.model.attributes.name + '-' + this.counter,
      url: this.model.attributes.url,
      library_id: this.model.attributes.library_id
    });
    App.compositionGraphicsCollection.add(newModel);

  },

  // generateCompositionGraphic: function() {
  //   var compositionGraphicModel = new App.Models.CompositionGraphicModel({ 
  //     name: this.model.attributes.name,
  //     url: this.model.attributes.url,
  //     library_id: this.model.attributes.library_id
  //   });
  //   App.compositionGraphicsCollection.add(compositionGraphicModel);


      // var background = this.el.cloneNode(true);
      // var background = $(background).find('img');


      // this.counter++;
      // var backgroundId = background.attr('id') + this.counter;
      // background.attr('id', backgroundId);
      // background.addClass('background savable');
      // background.removeClass('model-graphic');
      // $('body').append(background);
      // App.placedGraphics.push(backgroundId);
  // },

  generateSortable: function(graphicId) {
    //generates unique sortable per new composition graphic
    var sortableList = $('#sortable');
    var sortable = $('<li>').html(graphicId).appendTo(sortableList);
    $(sortable).attr('id', 'sortable' + graphicId);
    //identifies sortable's position in sorting list (to correspond w z-index)
    sortableList.sortable({ 
      stop: function(event, ui) {
        console.log(ui.item.index());
      }
    });
  
  },

  generateGraphic: function() {




  //     //clones the graphic
  //     var graphic = this.el.cloneNode(true);
  //     var graphic = $(graphic).find('img');
  //     //adds a unique id
  //     this.counter++;
  //     var graphicId = graphic.attr('id') + this.counter;
  //     graphic.attr('id', graphicId);
  //     graphic.addClass('graphic savable');
  //     graphic.removeClass('model-graphic');

  //     //adds draggable functionality & appends to canvas
  //     graphic.draggable();
  //     $('body').append(graphic);
     
  //     $(graphic).css({
  //       "top" : "300px",
  //       "left" : "500px",
  //       "marign" : "auto",
  //       "height" : "300px",
  //       "position" : "absolute"
  //     });

  //   $('.graphic').on( "dblclick", function() {
  //     $( this ).css({
  //       width: function( index, value ) {
  //         return parseFloat( value ) * 1.04;
  //       },
  //       height: function( index, value ) {
  //         return parseFloat( value ) * 1.04;
  //       }
  //     });
  //   });
  //   this.generateSortable(graphicId);
  //   App.placedGraphics.push(graphicId);
  }

});






