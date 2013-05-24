describe("App.Views.Board", function() {
  
  beforeEach(function() {
    this.view = new App.Views.Board();
  });
  
  describe("Instantiation", function() {
    
    it("should create a list element", function() {
      expect(this.view.el.nodeName).toEqual("DIV");
    });
    
    // it("should create a class", function() {
    //   expect($(this.view.el)).toHaveId('oxo-board');
    // });
    
  });
  
});