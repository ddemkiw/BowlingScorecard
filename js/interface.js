console.log("Hi Demkiw!");

var game = new Game();

var numberOfFrames = 10;

$(document).ready(function(){
  buildFrames();
  setFrameLitseners();
});

var setFrameLitseners = function(){
  var i = 0;
  while(i < numberOfFrames){
    $('#first-box'+ i).on('input',function(e){
      pushNewScore($(this));
      });
    $('#second-box'+ i).on('input',function(e){
      pushNewScore($(this));
      });
    i++;
  }
};

var pushNewScore = function(newScore){
  var targetFrame;
  var roundNumber = newScore.id.split('box')[1];
  var box = whichBox(newScore.id)  boxNumber
    game.roll(roundNumber, box, newScore.val());
    game.score();

targetFrame = Math.floor((game.round -1)/2);
$("#score" + targetFrame).text(game.totalScore);

};
  

var buildFrameUnit = function(frameNumber){
  var frameDiv = document.createElement('div');
    $(frameDiv).addClass('frame').attr('id', frameNumber).appendTo($('#frame-holder'));
    $form = $("<form></form>");
    $form.append('<input type="text" id="second-box' + frameNumber + '" class="second-roll">');
    $form.append('<input type="text" id="first-box' + frameNumber + '" class="first-roll">');
    $(frameDiv).append($form);
    $(frameDiv).append('<p class="score" id="score'+frameNumber +'">??</p>')
};

var buildFrames = function(){
  var i = 0;
  while(i < numberOfFrames){
    buildFrameUnit(i);
    i++;
  }
};

var whichBox = function(id){ 
  return id.indexof('first') === 0 ? 0 : 1
};




