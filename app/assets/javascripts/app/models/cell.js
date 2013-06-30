OXO.Models.Cell = Backbone.Model.extend({

  do_click: function() {
    var whose_turn = OXO.take_turn();
    this.set({value: whose_turn})
  }

});

// {location:"vertical-horizontal", value: "e"}