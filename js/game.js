var Game = function(){
  this.rolls = [];
  this.rollIndex = 0;
  this.totalScore = 0; 
};

Game.prototype.roll = function(knockDownPins) {
  this.rolls[this.rollIndex++] = knockDownPins;
  this.score();
  };

Game.prototype.score = function() {
  var sum = 0
  for (var i = 0, sum = 0; i < this.rolls.length; sum += this.rolls[i++]);
  this.totalScore = sum;

  function strike() {
    var sum = 0
    for (var i = 0, sum = 0; i < this.rolls.length; sum += this.rolls[i++]);
  }
};