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

    it('its spare bonus is set to 0', function(){
      expect(scorecard.bonus).toEqual(0)
    });
  });

  describe('during a game',function(){

    it('can move to the next frame', function(){
      scorecard.nextFrame();
      expect(scorecard.frames.length).toEqual(2)
    });

    it('can register a spare bonus round with a value of 1', function(){
      expect(scorecard.bonus).toEqual(0);
      scorecard.bonusRound(1);
      expect(scorecard.bonus).toEqual(1);
    });

    it('can register a strike bonus round with a value of 2', function(){
      expect(scorecard.bonus).toEqual(0);
      scorecard.bonusRound(2);
      expect(scorecard.bonus).toEqual(2);
    });
  });

  describe('finish game', function(){

    it('it is not over right away', function(){
      expect(scorecard.gameOver).toBe(false);
    });

    it('it is finished after 10 frames', function(){
      var times = 8;
      for(var i=0; i < times; i++){
        scorecard.nextFrame();
      }
      expect(scorecard.gameOver).toBe(false);
      scorecard.nextFrame();
      expect(scorecard.gameOver).toBe(true)
    });
  });
});

