var OXO = {
  Models: {},
  Collections: {},
  Views: {},
  Presenters: {},
  Router: {}
};

OXO.initialize = function() {

  this.set({turn: 'x'});

	var board = new OXO.Models.Board(the_layout);
	OXO.Views.board = new OXO.Views.Board({model:board, el: '#oxo-board'});
	OXO.Views.board.render();

//	Backbone.history.start();
};

var the_layout = { layout:  [ ["upper-left", "upper-middle", "upper-right"],
                              ["middle-left", "middle-middle", "middle-right"],
                              ["lower-left", "lower-middle", "lower-right"] ] }