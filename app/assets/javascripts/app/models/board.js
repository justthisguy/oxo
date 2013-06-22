App.Models.Board = Backbone.Model.extend({
  defaults: {
    squares: {},
    layout:
    [
      ["upper-left", "upper-middle", "upper-right"],
      ["middle-left", "middle-middle", "middle-right"],
      ["lower-left", "lower-middle", "lower-right"]
    ],
    turn: 'x'
  },

  initialize: function() {
    this.set("squares", this.initial_square_data());
  },
  
  initial_square_data:  function() {
    var self = this;
    var squares = {}

    var flat = _.flatten(this.get('layout'));

    _.each( flat, function(position) {
      squares[position] = self.empty();
    } );

    return squares;
  },

  empty: function() {
    return 'e'
  },

  x: function() {
    return 'x'
  },

  o: function() {
    return 'o'
  }


});


// _.extend(this, Backbone.Events);
// _.bindAll(this, 'updateCounts', 'updateSpot'
