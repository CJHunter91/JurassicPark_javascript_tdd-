
var Park = function(){
  this.enclosure = [];
}

Park.prototype.add = function(dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeType = function(type){
  var newEnclosure = [];
  for(dinosaur of this.enclosure){
    if(dinosaur.type !== type){
      newEnclosure.push(dinosaur);
    }
  }
  this.enclosure = newEnclosure;
}

Park.prototype.offspringOver = function(number){
  var dinosaurs = [];
  for(dinosaur of this.enclosure){
    if(dinosaur.noOffspring === number){
      dinosaurs.push(dinosaur);
    }
  }
  return dinosaurs;
}

Park.prototype.howManyAfter = function(years){
  var totalNumber = 0
  for(dinosaur of this.enclosure){
    var numberOfDinos = 1;
    for(var i = 0; i < years; i++){
      var temp = (numberOfDinos * dinosaur.noOffspring) + numberOfDinos;
      numberOfDinos = temp;
    }
    totalNumber += numberOfDinos;
  }
  return totalNumber;
}


module.exports = Park;