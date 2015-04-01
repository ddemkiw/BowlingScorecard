var Game = function(){
  rolls = [];
  this.startingScore();
  this.round = 0;
  this.totalScore = 0; 
  this.rounds = [];
};

Game.prototype.roll = function(roll, pinsKnockedDown) {
  var roundNumber = Math.ceil((roll + 1)/2);
  var round = roll % 2 === 0 ? 'score1' : 'score2'
  return this.rounds[roundNumber][round] = Number(pinsKnockedDown); 
};

Game.prototype.score = function() {
  var sum = 0;
  var i = 0;
  var self = this;
  
  while (i < this.rolls.length){
    if(self.isStrike(i)){
      sum += self.rolls[i] + self.rolls[i+1] + self.rolls[i+2];
    } else if (self.isSpair(i)){
      sum += self.rolls[i] + self.rolls[i+2];
    }else{
      sum += self.rolls[i];
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