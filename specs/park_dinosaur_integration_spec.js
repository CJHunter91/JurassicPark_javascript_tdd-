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

  it("can get all the dinos with  offspring over a certain number", function(){
    park.add(dinosaur);
    park.add(dinosaur);
    park.add(dinosaur2);
    park.add(dinosaur2);
    assert.strictEqual(park.offspringOver(2).length, 2)
  })

  it("can calculate how many dinosaurs after 1 year", function(){
    park.add(dinosaur)
    assert.strictEqual(park.howManyAfter(1), 3);
  })

  it("can calculate how many dinosaurs after 2 years", function(){
    park.add(dinosaur);
    assert.strictEqual(park.howManyAfter(2), 9);
  })

  it("can calculate how many dinosaurs after 2 years for more than 1 dinosaur", function(){
    park.add(dinosaur);
    park.add(dinosaur2);
    assert.strictEqual(park.howManyAfter(2), 45);
  })


})