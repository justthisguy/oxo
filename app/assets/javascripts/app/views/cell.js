OXO.Views.Cell = Backbone.View.extend({

  template: _.template(
    '<img src="assets/images/<%= value %>.png"></img></div>'
    ),

  events: {
    "click" : "do_click",
  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ));
    return this;
  },

  do_click: function() {
    alert("I am an alert box!");
  }

})