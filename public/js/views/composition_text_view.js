App.Views.CompositionText = Backbone.View.extend({
  initialize: function() {
    this.textTemplate = Handlebars.compile($('#composition-text-template').html());
    this.render();
  },

  render: function() {
    var compositionTextTemplate = this.textTemplate(this.model.toJSON());
    var newCompositionText = this.$el.html(compositionTextTemplate);
    App.placedText.push(this.model.attributes.data_name);
    setTimeout(function() { this.endowText(newCompositionText) }.bind(this), 50);
  },

  endowText: function(newCompositionText) {
    var compTextId = newCompositionText.find('canvas').attr('id');
    var compText = '#' + compTextId;
    var compText = $(compText);

    compText.resizable();
    compText.draggable({
      cursor: 'crosshair'
    });
    $('.ui-wrapper').css('overflow', '')
    this.generateSortable();
  },

  generateSortable: function() {
    var name = this.model.attributes.data_name;
    var sortable = $('<li>').html(name).prependTo($('#sortables'));
    $(sortable).attr('id', 'sortable' + name);
    $(sortable).attr('data-name', name); 
  
    this.setZIndex()
  },

  setZIndex: function() {
    var layerOrder = $('#sortables').sortable('toArray', {attribute: 'data-name'});
    App.layerOrder = layerOrder;
    layerOrder = layerOrder.reverse();
    //set z-indeces according to array order
    for (i = 0; i < layerOrder.length; i++) {
      var name = layerOrder[i];
      var obj = $('#' + name);      
      obj.css('z-index', i);
    }
  }
});