var Frame = function(){
  this.pins = 10;
  this.throws = 0;
};

Frame.prototype.max = function() {
  this.throws = Math.min(currentTemp,this.powerSaveMax);
};

Frame.prototype.throw = function() {
  currentThrow = (this.throws += 1)
  this.throws = Math.min(currentThrow, 2);
};


Frame.prototype.knockdown = function(knockedDownPins) {
  this.pins -= knockedDownPins;
};



