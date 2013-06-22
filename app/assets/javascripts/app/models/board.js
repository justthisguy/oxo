OXO.Models.Board = Backbone.Model.extend({
  defaults: {
    squares: {},
    layout: [],
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
