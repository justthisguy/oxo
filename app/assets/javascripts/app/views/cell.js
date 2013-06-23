OXO.Views.Cell = Backbone.View.extend({

  template: _.template(
    '<img src="assets/images/<%= value %>.png"></img></div>'
    ),

  render: function() {
    console.log(this.model.attributes)
    this.$el.append( this.template( this.model.attributes ));
    return this;
  },

})