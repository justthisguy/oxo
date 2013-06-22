var OXO = {
  Models: {},
  Collections: {},
  Views: {},
  Presenters: {},
  Router: {},
  turn: 'x',
  layout: []
};

OXO.initialize = function() {

	var board = new OXO.Models.Board({layout: OXO.layout});
	OXO.Views.board = new OXO.Views.Board({model:board, el: '#oxo-board'});
	OXO.Views.board.render();

//	Backbone.history.start();
};

OXO.layout = [["upper-left", "upper-middle", "upper-right"],
              ["middle-left", "middle-middle", "middle-right"],
              ["lower-left", "lower-middle", "lower-right"] ]