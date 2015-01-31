var Game = function(){
  this.rolls = [];
  this.round = this.rolls.length;
  this.totalScore = 0; 
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown);
  this.score();
};

Game.prototype.score = function() {
  for (var i = 0, sum = 0; i < this.rolls.length; sum += this.rolls[i++]);
  return this.totalScore = sum
};



Game.prototype.isStrike = function(round) {
  return this.rolls[round] === 10;
};

Game.prototype.isSpair = function(round) {
  return (this.rolls[round] + this.rolls[round + 1]) === 10;
};