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

	OXO.Models.board = new OXO.Models.Board({layout: OXO.layout});
	OXO.Views.board = new OXO.Views.Board({model:OXO.Models.board, el: '#oxo-board'});
	OXO.Views.board.render();

  // the board view sets up the html infrastructure for the board.  
  // the cell views must be rendered after
  OXO.Models.board.get('cells').each(function(cell_model) {
    var cell_view = new OXO.Views.Board({model:cell_model, el: '#' + cell_model.get('location')});
    cell_view.render();
  })


};

OXO.layout = [["upper-left", "upper-middle", "upper-right"],
              ["middle-left", "middle-middle", "middle-right"],
              ["lower-left", "lower-middle", "lower-right"] ]