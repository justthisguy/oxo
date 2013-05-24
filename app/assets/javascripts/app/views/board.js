App.Views.Board = Backbone.View.extend({

  render: function() {
    // $(this.el).append('<p>Board says hi</p>');
    // document.getElementById('oxo-container').append('<p>Board says hi</p>');

    $('#oxo-board').append('<p>Board says hi</p>');
    return this;
  }
})
