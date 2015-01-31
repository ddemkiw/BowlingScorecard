var Game = function(){
  this.rolls = [];
  this.round = this.rolls.length;
  this.totalScore = 0; 
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown);
  this.totalScore += pinsKnockedDown;
};



Game.prototype.isStrike = function(round) {
  return this.rolls[round] === 10;
};

Game.prototype.isSpair = function(round) {
  return (this.rolls[round] + this.rolls[round + 1]) === 10;
};