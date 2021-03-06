App.Views.Sortable = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#sortable-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();

    var deleteId = '#delete-' + this.model.attributes.data_name;
    var greyscaleId = '#greyscale-' + this.model.attributes.data_name;
    $(greyscaleId).click(this.toggleGrayscale.bind(this));
    $(deleteId).click(this.deleteGraphic.bind(this));
  },

  render: function() {
    var sortableTemplate = this.template(this.model.toJSON());
    var newSortable = this.$el.html(sortableTemplate);
    newSortable.attr('data-name', this.model.attributes.data_name);
    newSortable.prependTo($('#sortables'));
  },

  deleteGraphic: function() {
    var graphicId = this.model.attributes.data_name;
    var graphicImg = $('#' + graphicId);
    var graphicDiv = graphicImg.parent();

    this.model.destroy();
    graphicDiv.parent().remove();
    
    this.deleteSortable(graphicId);

    //Remove view from App.compositionViews
    for (var i = 0; i < App.compositionViews.length; i++) {
      var modelView = App.compositionViews[i].model.attributes
      if (modelView.data_name === graphicId) {
        App.compositionViews.splice(i, 1);
      }
    }
  },

  deleteSortable: function(graphicId) {
    var sortable = $('#sortable-' + graphicId);
    sortable.remove();
  },

  toggleGrayscale: function() {
    var graphicId = '#' + this.model.attributes.data_name;
    var greyscaleGraphicId = '#greyscale-' + this.model.attributes.data_name;
    $(graphicId).toggleClass('greyscale');
    $(greyscaleGraphicId).toggleClass('highlight');
  }
});