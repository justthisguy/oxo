var App = {
  Models: {},
  Collections: {},
  Views: {},
  Presenters: {},
  Router: {}
};

App.initialize = function() {

	var board = new App.Models.Board;
	App.Views.board = new App.Views.Board({model:board});
	App.Views.board.render();

//	Backbone.history.start();
};
