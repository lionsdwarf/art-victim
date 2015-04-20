App.Views.GraphicModelView = Backbone.View.extend({
  className: 'graphic',
  initialize: function() {
    this.template = Handlebars.compile($('#graphic-template').html());
    this.render();
    this.$el.dblclick(this.renderToCanvas);
    $('#save').click(this.saveImgLoc);
  },
  render: function() {
    var graphicTemplate = this.template(this.model.toJSON());
    this.$el.html(graphicTemplate);
  },
  renderToCanvas: function(graphicModel) {
    var clone = this.cloneNode(true);
    var sortableList = $('#sortable');
    // newSoundView.$el.attr('id', 'top-pad-' + this.counter);
    var sortable = $('<li>')
                          .html('LI')
                          .appendTo(sortableList)
                          .sortable();
    $(clone).draggable({ });
    $('#canvas').append(clone);
  }

});




