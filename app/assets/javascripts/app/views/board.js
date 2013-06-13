App.Views.Board = Backbone.View.extend({

  imageForLocation: function(location) {
    return 'assets/images/x1.png'
  },
  template: _.template(
      '<% _.each(layout, function(row){ %>' +
        '<div class="row">' +
          '<% _.each(row, function(location) { %>' +
            '<% var loc = location %>' +
            '<div class="cell" id="<%= loc %> ">' +
              '<img src="assets/images/x1.png"></img></div>' +
          '<% }) %>' +
        '</div>' +
      '<% }) %>'
    ),

  render: function() {
    var boardLayout =  
    [
      ["upper_left", "upper_middle", "upper_right"], 
      ["middle_left", "middle_middle", "middle_right"], 
      ["lower_left", "lower_middle", "lower_right"]
    ];

    attrs = _.extend(this.model.get('squares'), {'layout':boardLayout});
    $('#oxo-board').append( this.template( attrs ));
    return this.el;
  },

})