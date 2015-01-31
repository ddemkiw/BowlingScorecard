var Game = function(){
  this.rolls = [];
  this.frame = 0;
  this.totalScore = 0; 
};

Game.prototype.roll = function(knockDownPins) {
  var points = this.rolls[this.frame++] = knockDownPins;
    return points
};

Game.prototype.calculateScore = function() {
  var score = 0;
  var i = 0; 
  var 

  for (i = 0; i < scoringRolls; i++)
  this.totalScore +=   
};