App.Views.CompositionBackground = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-background-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    $('#background-view').empty();
    var compositionBackgroundTemplate = this.template(this.model.toJSON());
    var newCompositionBackground = this.$el.html(compositionBackgroundTemplate);
  },

  setAttributes: function() {
      var backgroundDataName = this.model.attributes.data_name;
      var backgroundId = '#' + backgroundDataName;

      this.model.set({
        z_index : -1,
        top : parseInt($(backgroundId).css('top')),
        left : 0,
        width : $(backgroundId).width(),
        height : $(backgroundId).height(),
        user_input : $(backgroundId).attr('data-text'),
        composition_id : App.currentComposition
      });
  },

  save: function() {
    this.model.save();
  }
});