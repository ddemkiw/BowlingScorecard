

var Frame = function(scorecard){
  this.pins = 10;
  this.throws = 0;
  this.openFrame  = true;
  this.scorecard = scorecard;
};

Frame.prototype.knockdown = function(knockedDownPins) {
  this.pins -= knockedDownPins;
};

Frame.prototype.strike = function() {
  this.knockdown(10);
  this.scorecard.bonusRound();
  this.closeFrame();
};

Frame.prototype.throw = function() {
  this.throws += 1;
  this.checkStatus();
};

Frame.prototype.closeFrame = function() {
  this.openFrame = false;
  this.scorecard.nextFrame;
};

Frame.prototype.checkStatus = function() {
  if((this.scorecard.bonus) && (this.throws === 3))
    {
      this.closeFrame()
    } else if((!this.scorecard.bonus) && (this.throws === 2))
    {
      this.closeFrame()
    }

};





