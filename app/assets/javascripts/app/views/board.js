App.Views.Board = Backbone.View.extend({

  imageForLocation: function(location) {
    return 'assets/images/x1.png'
  },
  template: _.template(
      '<% _.each(layout, function(row){ %>' +
        '<div class="row">' +
          '<% _.each(row, function(location) { %>' +
            '<div class="cell" id="<%= location %> ">' +
            '<img src="assets/images/<%= squares[location] %>.png"></img></div>' +
          '<% }) %>' +
        '</div>' +
      '<% }) %>'
    ),

  render: function() {

    var attrs =  {
        'squares': this.model.get('squares'), 
        'layout':this.model.get('layout')
      };

    $('#oxo-board').append( this.template( attrs ));
    return this.el;
  },

})