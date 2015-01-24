var BowlingScorecard = function() {
  this.frames = [new Frame(this)];
  this.player = 1;
  this.spareBonus = false;
  this.strikeBonus = false;
  this.gameOver = false;
};


BowlingScorecard.prototype.nextFrame = function() {
  var frame = new Frame(this);
  this.frames.push(frame)
  this.checkWin();
};

BowlingScorecard.prototype.spareBonusRound = function() {
  this.spareBonus = true;
};

BowlingScorecard.prototype.strikeBonusRound = function() {
  this.strikeBonus = true;
};

BowlingScorecard.prototype.checkWin = function() {
  if(this.frames.length === 10){this.gameOver = true}
};




