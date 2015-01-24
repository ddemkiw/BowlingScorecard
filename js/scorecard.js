var Scorecard = function() {
  this.frames = [new Frame(this)];
  this.player = 1;
  this.bonus = 0;
  this.gameOver = false;
};


Scorecard.prototype.nextFrame = function() {
  var frame = new Frame(this);
  this.frames.push(frame)
  this.checkWin();
};

Scorecard.prototype.bonusRound = function(number) {
  this.bonus = number;
};

Scorecard.prototype.checkWin = function() {
  if(this.frames.length === 10){this.gameOver = true}
};




