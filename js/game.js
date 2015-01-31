var Game = function(){
  this.rolls = [];
  this.round = 0;
  this.totalScore = 0; 
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.rolls.push(pinsKnockedDown);
};

Game.prototype.score = function() {
  var sum = 0;
  var i = 0;
  var self = this;
  
  while (i < this.rolls.length){
    if(self.isStrike(i)){
      sum += self.rolls[i] + self.rolls[i+1] + self.rolls[i+2];
      i++;
    } else if (self.isSpair(i)){
      sum += self.rolls[i] + self.rolls[i+2];
      i++;
    }else{
      sum += self.rolls[i];
      i++;
    }
  }
  this.totalScore = Number(sum)
  return this.totalScore
};



Game.prototype.isStrike = function(round) {
  return this.rolls[round] === 10;
};

Game.prototype.isSpair = function(round) {
  return (this.rolls[round] + this.rolls[round + 1]) === 10;
};