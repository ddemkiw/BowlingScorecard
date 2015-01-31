describe('Game', function(){

  var  game;

beforeEach(function() { game = new Game()});

  describe('to start', function(){

    it('should have 0 frames', function(){
      expect(game.frame).toEqual(0);
    });

    it('should have a score of 0', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('should have 0 rolls', function(){
      expect(game.rolls).toEqual([]);
    });
  });

  describe('', function(){

    it('',function(){
      
    });
  });
});