describe('Frame', function(){
     
     var scorecard;
     var frame;

  beforeEach(function(){
    scorecard = new BowlingScorecard();
    frame = new Frame(scorecard);
    
  });

  describe('can keep track of pins', function(){
    
    it('has ten pins per frame', function(){
    expect(frame.pins).toEqual(10);
    });

    it('it when pins are knocked down', function(){
      frame.knockdown(1);
      expect(frame.pins).toEqual(9);
    });
  });

    describe('can keep track of throws', function(){

      it('it should start with 0 throws', function(){
        expect(frame.throws).toEqual(0);

      });

      it('they can go up',function(){
        frame.throw();
        expect(frame.throws).toEqual(1)
      });

      it('they maxout at 2 throws in regular play', function(){
        frame.throw();
        frame.throw();
        expect(frame.openFrame).toBe(false)
      });

      it('will maxout at 3 throws during bonus play', function(){
        scorecard.bonusRound();
        frame.throw();
        frame.throw();
        expect(frame.openFrame).toBe(true);
        frame.throw();
        expect(frame.openFrame).toBe(false);
      });
    }); 

    describe('during game play', function(){

      it('it should be open by default', function(){
        expect(frame.openFrame).toBe(true)
      });

      it('should be able to close', function(){
        frame.closeFrame();
        expect(frame.openFrame).toBe(false)
      });
    });

    describe('when there is a strike',function(){

     it('should close frame ',function(){
      frame.strike();
      expect(frame.openFrame).toBe(false)
     });
 
    it('should give bonus round',function(){
      frame.strike();
      expect(scorecard.bonus).toBe(true)
     });

    it('should knockdown all pins', function(){
      frame.strike();
      expect(frame.pins).toEqual(0)
    });


    });
  });