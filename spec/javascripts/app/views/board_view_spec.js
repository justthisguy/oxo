describe("OXO.Views.Board", function() {
  
  beforeEach(function() {
    this.view = new OXO.Views.Board();
  });
  
  describe("Instantiation", function() {
    
    it("should create a list element", function() {
      expect(this.view.el.nodeName).toEqual("DIV");
    });
    
    it("should create a <p>", function() {
      debugger;
      expect($(this.view.el).has('p')).toBeTruthy;
    });
    
    it("fails because it doesn't have a span", function() {
      expect($(this.view.el).has('span')).toBeTruthy;
    });

  });
  
});