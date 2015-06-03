var editCompositionGraphic = function() {
  // jQuery UI sortable manages layering via css z-index
  $('#sortables').sortable({
    //on change of DOM position, update function called
    update: function(event, ui) {
        //create array of composition element names
        var layerOrder = $(this).sortable('toArray', {attribute: 'data-name'});
        layerOrder = layerOrder.reverse();
        //set z-indeces according to array order
        for (i = 0; i < layerOrder.length; i++) {
          var name = layerOrder[i];
          $('#' + name).css('z-index', i);
        }
    }
  });

}