var BowlingScorecard = function() {
  this.frames = [new Frame(this)];
  this.player = 1;
  this.bonus = 0;
  this.gameOver = false;
};


BowlingScorecard.prototype.nextFrame = function() {
  var frame = new Frame(this);
  this.frames.push(frame)
  this.checkWin();
};

BowlingScorecard.prototype.bonusRound = function(number) {
  this.bonus = number;
};

BowlingScorecard.prototype.checkWin = function() {
  if(this.frames.length === 10){this.gameOver = true}
};




