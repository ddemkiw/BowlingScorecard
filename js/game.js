var Game = function(){
    // I removed this.rolls and this.totalScore, we're not using them any more

    // We need to create the array before the startingScore gets called, that's why it broke!
    this.rounds = [];
    // set up the game!
    this.startingScore();
};

Game.prototype.roll = function(roundNumber, boxNumber, pinsKnockedDown) {
    // 'roundNumber' can be between 1 and 10
    // 'boxNumber' is 0 or 1 (first or second roll of the round)
    // 'pinsKnockedDown' is the actual score we are recording
    var whichRoll = boxNumber === 0 ? 'score1' : 'score2';
    // find the correct 'round' object using roundNumber, then set either score1 or score2 value
    return this.rounds[roundNumber][whichRoll] = Number(pinsKnockedDown);
};

Game.prototype.score = function() {
    // what about if we pass an argument in here, so we can ask for the score for a particular round?
   var sum = 0;
   var i = 0;
   var self = this;

    // maybe a for-loop will be better here?
  while (i < this.rounds.length){
        // add together the rolls for this round and add it to the total
      sum += self.rounds[i].score1 + self.rounds[i].score2;
    i++;
  }

  return sum;

};

Game.prototype.isStrike = function(round) {
  // todo: fix this to work with new scoring
  return this.rolls[round] === 10;
};

Game.prototype.isSpair = function(round) {
    // todo: fix this to work with new scoring
  return (this.rolls[round] + this.rolls[round + 1]) === 10;
};

Game.prototype.startingScore = function() {
    //  I made i into a var, otherwise it makes a global variable (which is bad)
  for(var i=0; i< 10; i++){
    // there are 10 'rounds', each with two rolls, we start off with all the scores being zero
    // the scores for each roll are stored in an object with properties 'score1' and 'score2'
    this.rounds.push({
      score1:0,
      score2:0
    });
  }
};