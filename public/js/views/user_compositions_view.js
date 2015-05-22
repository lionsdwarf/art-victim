App.Views.UserCompositionsCollectionView = Backbone.View.extend({
  el: '#user-compositions',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOneUserCompositionView);
  },
  renderOneUserCompositionView: function(userCompositionModel) {
    console.log(userCompositionModel)
    var userCompositionView = new App.Views.UserCompositionModelView({ model: userCompositionModel });
    this.$el.append(userCompositionView.el);
  }
});