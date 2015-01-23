describe('BowlingScorecard', function(){
  var scorecard; 

  beforeEach(function(){
    scorecard = new BowlingScorecard();
  });

  describe('by default ', function(){

    it('it has ten frames',function(){
      expect(scorecard.frames).toEqual(10)
    });

    it('it has a player', function(){
      expect(scorecard.player).toEqual(1)
    });

    it()

  });

});