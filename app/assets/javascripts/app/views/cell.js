OXO.Views.Cell = Backbone.View.extend({

  template: _.template(
    '<img src="assets/images/<%= value %>.png"></img></div>'
  ),

  events: {
    "click" : "do_click",
  },

  initialize: function(){
    _.bindAll(this, "render");
    this.model.bind('change', this.render);
  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ));
    return this;
  },

  do_click: function() {
    this.model.do_click();
  }

})