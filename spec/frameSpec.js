describe('Frame', function(){
     
  beforeEach(function(){
    frame = new Frame();
  });

  describe('can keep track of pins', function(){
    
    it('has ten pins per frame', function(){
    expect(frame.pins).toEqual(10);
    });

    it('it when pins are knocked down', function(){
      frame.knockdown(1);
      expect(frame.pins).toEqual(9);
    });

  //   it('when pins are reset', function(){
  //     frame.knockdown(1);
  //     frame.resetFrame();
  //     expect(frame.pins).toEqual(10);
  //   });
  });

    describe('can keep track of throws', function(){

      it('it should start with 0 throws', function (){
        expect(frame.throws).toEqual(0);

      });

      it('they can go up',function(){
        frame.throw();
        expect(frame.throws).toEqual(1)
      });

      it('they maxout at 2 throws in regular play', function(){
        frame.throw();
        frame.throw();
        frame.throw();
        expect(frame.throws).toEqual(2)
      });
    }); 
  });