App.Views.UserCompositions = Backbone.View.extend({
  el: '#compositions-list',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderCompositionListView);
  },

  renderCompositionListView: function(newModel) {
    var userCompositionView = new App.Views.UserComposition({ model: newModel });
    this.$el.append(userCompositionView.el);
  }
});