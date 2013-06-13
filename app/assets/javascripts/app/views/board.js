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

  initialize: function() {

  },



  render: function() {
    var boardLayout =  
    [
      ["upper_left", "upper_middle", "upper_right"], 
      ["middle_left", "middle_middle", "middle_right"], 
      ["lower_left", "lower_middle", "lower_right"]
    ];

    // $(this.el).append('<p>Board says hi</p>');
    // document.getElementById('oxo-container').append('<p>Board says hi</p>');


    var foo = this.model.get('squares');
    console.log(foo);
    foo = _.extend(foo, {'layout':boardLayout});

    var renderedContent = this.template( foo );
    console.log(renderedContent)      

    $(this.el).html( renderedContent );
    $('#oxo-board').append(renderedContent);


    return this.el;
  },



})
