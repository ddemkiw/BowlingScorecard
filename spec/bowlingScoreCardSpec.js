describe('BowlingScorecard', function(){
  var scorecard; 
  var frame;

  beforeEach(function(){
    scorecard = new BowlingScorecard();
    frame = new Frame;
  });

  describe('by default ', function(){

    it('it has frames',function(){
      expect(scorecard.frames.length).toEqual(1);
    });

    it('it has a player', function(){
      expect(scorecard.player).toEqual(1);
    });

    it('its bonus is set to false', function(){
      expect(scorecard.bonus).toBe(false)
    });
  });
  describe('during a game',function(){

    it('can move to the next frame', function(){
      scorecard.nextFrame();
      expect(scorecard.frames.length).toEqual(2)
    });

    it('can register a bonus round', function(){
      expect(scorecard.bonus).toBe(false);
      scorecard.bonusRound();
      expect(scorecard.bonus).toBe(true);
    });
  });

  describe('finish game', function(){

    it('it is not over right away', function(){
      expect(scorecard.gameOver).toBe(false)
    });

    it('it is finished after 10 frames')
      9.times(scorecard.nextFrame());
      expect(scorecard.gameOver).toBe(true)
  });

});

