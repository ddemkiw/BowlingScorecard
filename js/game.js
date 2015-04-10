var Game = function (){
  this.rounds= [];
  this.totalScore = 0;
  this.startingScore();
};


Game.prototype.roll = function(roundNumber, rollNumber, pinsKnockedDown) {
  var round = this.rounds[roundNumber]; 
  
  if(rollNumber === 1){
    round.score1 = pinsKnockedDown;
  }else{
    round.score2 = pinsKnockedDown;
  };
};

Game.prototype.score = function() {
  var self = this;
  for(i=0; i<this.rounds.length; i++){
    var round = self.rounds[i];
    self.totalScore += (round.score1 + round.score2)
  }
  return this.totalScore;
};

Game.prototype._isStrike = function() {
  for(i=0; i<10; this.rounds)
};

Game.prototype.startingScore = function() {
  var self = this; 

  for(i=0; i< 10; i++){
    self.rounds.push({
      score1:0,
      score2:0
    });
  }
  return this.rounds;
};


