var Game = function (){
  this.rounds= [];
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