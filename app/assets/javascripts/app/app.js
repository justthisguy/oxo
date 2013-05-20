var App = {
  Models: {},
  Collections: {},
  Views: {},
  Presenters: {},
  Router: {}
};

App.initialize = function() {

	var board = new App.Models.Board;
	var boardView = new App.Views.BoardView({model:board});
	boardView.render();

//	Backbone.history.start();
};
