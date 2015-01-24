

var Frame = function(scorecard){
  this.pins = 10;
  this.throws = 0;
  this.openFrame  = true;
  this.scorecard = scorecard;
};

Frame.prototype.knockdown = function(knockedDownPins) {
  var self = this; 

  if(knockedDownPins === 10){
    calculatePins();
    this._strike();
  }else if ((this.pins - knockedDownPins) === 0)
  {
    calculatePins();
    this._spair();
  }else
  {
    calculatePins();
    this._throw();
  }

  function calculatePins(){
    self.pins -= knockedDownPins;
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





