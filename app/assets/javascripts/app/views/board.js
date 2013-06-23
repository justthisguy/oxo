OXO.Views.Board = Backbone.View.extend({

  template: _.template(
      '<% _.each(layout, function(row){ %>' +
        '<div class="row">' +
          '<% _.each(row, function(location) { %>' +
            '<div class="cell" id="<%= location %> ">' +
            '<img src="assets/images/<%= cells.findWhere({location: location}).get("value") %>.png"></img></div>' +
          '<% }) %>' +
        '</div>' +
      '<% }) %>'
    ),

  render: function() {
    var attrs =  {
        'cells': this.model.get('cells'), 
        'layout':this.model.get('layout')
      };

    this.$el.append( this.template( attrs ));
    return this;
  },

})