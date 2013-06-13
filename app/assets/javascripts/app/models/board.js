App.Models.Board = Backbone.Model.extend({
  defaults: { squares: {} },

  initialize: function() {
    this.set("squares", initial_square_data);
  }
  
});


var initial_square_data =  {
      upper_left: null,
      upper_middle: null,
      upper_right: null,

      middle_left: null,
      middle_middle: null,
      middle_right: null,

      lower_left: null,
      lower_middle: null,
      lower_right: null
    }



// _.extend(this, Backbone.Events);
// _.bindAll(this, 'updateCounts', 'updateSpot'
