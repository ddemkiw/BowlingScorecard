var BowlingScorecard = function() {
  this.frames = [new Frame(this)];
  this.player = 1;
  this.bonus = false;
  this.gameOver = false;
};


BowlingScorecard.prototype.nextFrame = function() {
  var frame = new Frame(this);
  this.frames.push(frame)
};

BowlingScorecard.prototype.bonusRound = function() {
  this.bonus = true;
};

BowlingScorecard.prototype.checkWin = function() {
  // body...
};




