describe('Scorecard', function(){
  var scorecard; 
  var frame;
  var frame2;

  beforeEach(function(){
    scorecard = new Scorecard();
    frame = new Frame;
    frame2 = new Frame;
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

    it('can calculate a total score',function(){
      frame.score = 10;
      frame2.score = 5;
      scorecard.frames = [frame, frame2];
      scorecard.tallyScore();
      expect(scorecard.totalScore).toEqual(15);
    });

    it('can calculate a total score',function(){
      frame.score = 20;
      frame2.score = 2;
      scorecard.frames = [frame, frame2];
      scorecard.tallyScore();
      expect(scorecard.totalScore).toEqual(22);
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

