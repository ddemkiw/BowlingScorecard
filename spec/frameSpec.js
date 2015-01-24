describe('Frame', function(){
     
     var scorecard;
     var frame;

  beforeEach(function(){
    scorecard = new Scorecard();
    frame = new Frame(scorecard);
    
  });

  describe('can keep track of pins', function(){
    
    it('has ten pins per frame', function(){
    expect(frame.pins).toEqual(10);
    });

    it('it knows when pins are knocked down', function(){
      frame.knockdown(1);
      expect(frame.pins).toEqual(9);
    });

    it('two throws',function(){
      frame.knockdown(2);
      frame.knockdown(4);
      expect(frame.pins).toEqual(4)
      expect(frame.openFrame).toBe(false)
     });


    it('it knows that knocking down 10 pins is a strike',function(){
      frame.knockdown(10);
      expect(frame.pins).toEqual(0)
      expect(scorecard.bonus).toEqual(2)
    });
  });

    describe('can keep track of throws', function(){

      it('it should start with 0 throws', function(){
        expect(frame.throws).toEqual(0);

      });

      it('they can go up',function(){
        frame._throw();
        expect(frame.throws).toEqual(1)
      });

      it('they maxout at 2 _throw in regular play', function(){
        frame._throw();
        frame._throw();
        expect(frame.openFrame).toBe(false)
      });
    }); 


    describe('during game play', function(){

      it('it should be open by default', function(){
        expect(frame.openFrame).toBe(true)
      });

      it('should be able to close', function(){
        frame._closeFrame();
        expect(frame.openFrame).toBe(false)
      });
    });

    describe('when there is a strike',function(){

     it('should close frame ',function(){
      frame._strike();
      expect(frame.openFrame).toBe(false)
     });
 
    it('should give bonus round of 2',function(){
      frame._strike();
      expect(scorecard.bonus).toEqual(2)
     });
  });


    describe('when there is a spair',function(){

     it('should close frame ',function(){
      frame._spair();
      expect(frame.openFrame).toBe(false)
     });
 
    it('should give bonus round of 1',function(){
      frame._spair();
      expect(scorecard.bonus).toEqual(1)
     });
  });

    describe('in tenth round during bonus play', function(){

 // it('will maxout at 3 _throw during bonus play', function(){
      //   scorecard.bonusRound();
      //   frame.throw();
      //   frame.throw();
      //   expect(frame.openFrame).toBe(true);
      //   frame.throw();
      //   expect(frame.openFrame).toBe(false);
      // });
    });
  });