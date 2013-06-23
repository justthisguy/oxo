OXO.Models.Board = Backbone.Model.extend({
  defaults: {
    cells: {},
    layout: [],
  },

  initialize: function() {
    this.set("cells", this.initial_cell_data());
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

  initial_cell_data:  function() {
    var self = this;
    var initial_cells = new OXO.Collections.Cell;

    var flat = _.flatten(this.get('layout'));

    _.each( flat, function(location) {
      initial_cells.add([ { location: location, value: self.empty() } ]);
    } );

    return initial_cells;
  },

});


// _.extend(this, Backbone.Events);
// _.bindAll(this, 'updateCounts', 'updateSpot'
