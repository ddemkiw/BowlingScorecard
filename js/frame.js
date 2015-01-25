var Frame = function(scorecard){
  this.pins = 10;
  this.throws = 0;
  this.openFrame  = true;
  this.scorecard = scorecard;
  this.score = 0;
};

Frame.prototype.knockdown = function(knockedDownPins) {
  var self = this; 

  if(knockedDownPins === 10){
    calculatePins();
    calculateScore();
    this._strike();
  }else if ((self.pins === 5) && (knockedDownPins === 5))
  {
    calculatePins();
    calculateScore();
    this._spair();
  }else
  {
    calculatePins();
    calculateScore();
    this._throw();
  }

  function calculatePins(){
    self.pins -= knockedDownPins;
  };

  function calculateScore(){
    if(self.scorecard.bonus > 0)
      {
        self.score += (knockedDownPins * 2);
        self.scorecard.bonus -=1;
      } else
      {
        self.score += knockedDownPins;
      }
    };

};

Frame.prototype._strike = function() {
  this.scorecard.bonusRound(2);
  this._closeFrame();
};

Frame.prototype._spair = function() {
  this.scorecard.bonusRound(1);
  this._closeFrame();
};

Frame.prototype._throw = function() {
  this.throws += 1;
  this._checkStatus();
};

Frame.prototype._closeFrame = function() {
  this.openFrame = false;
  this.scorecard.nextFrame;
};

Frame.prototype._checkStatus = function() {
 if(this.throws === 2){this._closeFrame()}
};





