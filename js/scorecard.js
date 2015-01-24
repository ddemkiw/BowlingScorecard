var Scorecard = function() {
  this.frames = [new Frame(this)];
  this.player = 1;
  this.bonus = 0;
  this.gameOver = false;
  this.totalScore = 0;
};


Scorecard.prototype.nextFrame = function() {
  if(this.gameOver === false){
    var frame = new Frame(this);
    this.frames.push(frame);
    this.tallyScore();
    this.checkWin();
  }
};

Scorecard.prototype.bonusRound = function(number) {
  this.bonus = number;
};

Scorecard.prototype.tallyScore = function() {
  var self = this;
  this.frames.forEach( function(frame) {
    self.totalScore += frame.score
  });
};

Scorecard.prototype.checkWin = function() {
  if(this.frames.length === 10){this.gameOver = true}
};







