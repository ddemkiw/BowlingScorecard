describe('Game', function(){

  var  game;

beforeEach(function() { game = new Game()});

  describe('to start', function(){


    it('should have a score of 0', function(){
      expect(game.totalScore).toEqual(0);
    });

    it('should have 0 rolls', function(){
      expect(game.rolls).toEqual([]);
    });
  });

  describe('a game with no strikes and no spairs', function(){

    it('should have a score of ten if you hit one pin every turn', function(){
      var i = 0;
      for(i = 0; i < 10; i++){
         game.roll(1);
       };
       console.log(game.rolls)
       expect(game.totalScore).toEqual(10)
    });
  });

  describe('a game with strikes', function(){

    it('a game with only strikes should add up to 300', function(){
      var i = 0;
      for(i = 0; i < 10; i++){
         game.roll(10);
       };
      expect(game.totalScore).toEqual(300)
    });
  });


  describe('a game with spairs', function(){

    it('a game that only rolls 5s should have a score of 150', function(){

    });
  });
});