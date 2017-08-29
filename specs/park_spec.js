var assert = require('assert');
var Park = require('../park.js');

describe("Jurrasic park enclosure test", function(){
  beforeEach(function(){
    park = new Park();
  })

  it("should start empty", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })
})