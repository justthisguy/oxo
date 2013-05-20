App.Models.Board = Backbone.Model.extend({
  initialize: function() {
    // _.extend(this, Backbone.Events);
    // _.bindAll(this, 'updateCounts', 'updateSpot'
  },

});


App.Views.BoardView = Backbone.View.extend({
  render: function() {
    // $(this.el).append('<p>Board says hi</p>');

    $('#oxo-container').append('<p>Board says hi</p>');
    return this;
    // document.getElementById('oxo-container').append('<p>Board says hi</p>');
  }
})
