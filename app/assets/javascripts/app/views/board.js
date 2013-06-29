OXO.Views.Board = Backbone.View.extend({

  template: _.template(
      '<% _.each(layout, function(row){ %>' +
        '<div class="row">' +
          '<% _.each(row, function(location) { %>' +
            '<div class="cell" id="<%= location %>">' +
            '</div>' +
          '<% }) %>' +
        '</div>' +
      '<% }) %>'
    ),

  render: function() {
    this.$el.append( this.template( { 'layout': this.model.get('layout') } ));
    return this;
  },

})