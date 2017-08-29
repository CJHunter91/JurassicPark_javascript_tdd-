var assert = require('assert');
var Dinosaur = require("../dinosaur.js");

describe("A Dinosaur", function(){

  beforeEach(function(){
    dinosaur = new Dinosaur("TRex", 2);
  })

  it("Should have a name", function(){
    assert.strictEqual(dinosaur.type, "TRex");
  })

})