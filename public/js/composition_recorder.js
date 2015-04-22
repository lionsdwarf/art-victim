var recorder = {

  recordComposition: function() {
    App.savedComposition = [];
    var array = App.placedGraphics;
      for (var i = 0; i < array.length; i++ ) {
        var composedGraphic = {};
        var graphic = "[id=" + '"' + array[i] + '"' + "]";
        // console.log($(graphic));
        composedGraphic.width = $(graphic).width();
        composedGraphic.height = $(graphic).height();
        composedGraphic.left = $(graphic).position().left;
        composedGraphic.top = $(graphic).position().top;
        composedGraphic.zIndex = $(graphic).css('z-index');
        composedGraphic.url = $(graphic).data('url');
        console.log(composedGraphic);
        App.savedComposition.push(composedGraphic);
        console.log(App.savedComposition);

      }
  }
}

