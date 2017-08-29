var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');


describe("Integration of dinosaur and park", function(){

  var park;
  var dinosaur;
  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur("TRex", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 5);
  })

  it("should add a dinosaur to enclosure", function(){
    park.add(dinosaur);
    assert.strictEqual(park.enclosure[0], dinosaur);
  })

  it("can remove all of specific type", function(){
    park.add(dinosaur);
    park.add(dinosaur);
    park.add(dinosaur2);
    park.removeType("TRex");
    assert.strictEqual(park.enclosure[0], dinosaur2)
  })
})