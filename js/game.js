var Game = function(){
  rolls = [];
  this.startingScore();
  this.round = 0;
  this.totalScore = 0; 
  this.rounds = [];
};

Game.prototype.roll = function(roundNumber, boxNumber, pinsKnockedDown) {
  var whichRoll = boxNumber === 0 ? 'score1' : 'score2'
  return this.rounds[roundNumber][whichRoll] = Number(pinsKnockedDown); 
};

Game.prototype.score = function() {
  var sum = 0;
  var i = 0;
  var self = this;
  
  while (i < this.rounds.length){
      sum += self.rounds[i].score1 + self.rounds[i].score2;
    }
    i++;
  }

  return this.totalScore = sum;

};

Game.prototype.isStrike = function(round) {
  return this.rolls[round] === 10;
};

Game.prototype.isSpair = function(round) {
  return (this.rolls[round] + this.rolls[round + 1]) === 10;
};

Game.prototype.startingScore = function() {
  for(i=0; i< 10; i++){
    this.rounds.push({
      score1:0,
      score2:0
    });
  }
};