App.Views.CompositionGraphicsCollectionView = Backbone.View.extend({
  el: '#home-view',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderCompositionGraphic);
  },

  // defineModel: function() {
  //   var newModel = this.collection.last();
  //   var src = newModel.attributes.url;
  //   (src.search('/backgrounds') >= 0) ? this.renderCompositionBackground(newModel) : this.renderCompositionGraphic(newModel); 
  // },

  renderCompositionGraphic: function(newModel) {
    var newCompositionGraphicModelView = new App.Views.CompositionGraphicModelView({
      model: newModel
    });
    this.$el.append(newCompositionGraphicModelView.el);
  },

  // renderCompositionBackground: function(newModel) {
  //   var newCompositionBackgroundModelView = new App.Views.CompositionBackgroundModelView({
  //     model: newModel
  //   });
  //   this.$el.append(newCompositionBackgroundModelView.el);
  // }

});