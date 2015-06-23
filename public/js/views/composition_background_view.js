App.Views.CompositionBackground = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($('#composition-background-template').html());
    this.el = $(this.template(this.model.toJSON()));
    this.render();
  },

  render: function() {
    // var backgroundId = $('#background-view').find('img').attr('id');
    $('#background-view').empty();
    var compositionBackgroundTemplate = this.template(this.model.toJSON());
    var newCompositionBackground = this.$el.html(compositionBackgroundTemplate);
    this.removeFormerBackgroundView();
  },

  removeFormerBackgroundView: function() {
    for (var i = 0; i < App.compositionViews.length; i++) {
      var modelView = App.compositionViews[i].model.attributes.data_name;
      if (modelView === App.compositionBackground) {
        App.compositionViews.splice(i, 1);
      }
    }
    App.compositionBackground = this.model.attributes.data_name;
  },

  setAttributes: function() {
      var backgroundDataName = this.model.attributes.data_name;
      var backgroundId = '#' + backgroundDataName;

      this.model.set({
        z_index : -1,
        top : 0,
        left : 0,
        width : $(backgroundId).width(),
        height : $(backgroundId).height(),
        // user_input : $(backgroundId).attr('data-text'),
        composition_id : App.currentComposition
      });
  },

  save: function() {
    this.model.save();
  }
});