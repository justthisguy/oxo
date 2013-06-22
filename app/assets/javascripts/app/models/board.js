OXO.Models.Board = Backbone.Model.extend({
  defaults: {
    squares: {},
    layout: [],
  },

  initialize: function() {
    this.set("squares", this.initial_square_data());
  },

  empty: function() {
    return 'e'
  },

  x: function() {
    return 'x'
  },

  o: function() {
    return 'o'
  },

  initial_square_data:  function() {
    var self = this;
    var initial_squares = new OXO.Collections.Cell;

    var flat = _.flatten(this.get('layout'));

    _.each( flat, function(location) {
      initial_squares.add([ { location: location, value: self.empty() } ]);
    } );

    return initial_squares;
  },

});


// _.extend(this, Backbone.Events);
// _.bindAll(this, 'updateCounts', 'updateSpot'
