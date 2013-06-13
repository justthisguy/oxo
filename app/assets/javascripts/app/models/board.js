App.Models.Board = Backbone.Model.extend({
  defaults: { squares: quux },

  initialize: function() {
    this.set("squares", quux);
  }
  
});


var quux =  {
      upper_left: null,
      upper_middle: true,
      upper_right: false,

      middle_left: null,
      middle_middle: null,
      middle_right: null,

      lower_left: null,
      lower_middle: null,
      lower_right: null
    }



// _.extend(this, Backbone.Events);
// _.bindAll(this, 'updateCounts', 'updateSpot'
