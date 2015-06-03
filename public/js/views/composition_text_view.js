App.Views.CompositionText = Backbone.View.extend({
  initialize: function() {
    this.textTemplate = Handlebars.compile($('#composition-text-template').html());
    this.render();
  },

  render: function() {
    var compositionTextTemplate = this.textTemplate(this.model.toJSON());
    var newCompositionText = this.$el.html(compositionTextTemplate);
    App.placedText.push(this.model.attributes.data_name);
    this.endowDraggable(newCompositionText);
  },

  endowDraggable: function(newCompositionText) {
    var compText = newCompositionText.find('canvas');
    compText.draggable({
      cursor: 'crosshair'
    });
    this.generateSortable();
  },

  generateSortable: function() {
    var name = this.model.attributes.data_name;
    var sortable = $('<li>').html(name).prependTo($('#sortables'));
    $(sortable).attr('id', 'sortable' + name);
    $(sortable).attr('data-name', name); 
  }
});