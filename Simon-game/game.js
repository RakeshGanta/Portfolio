gamePattern =[];
var colors = ["green","red","yellow","blue"];
var userClicked =[];
var level=0;
var started = false;

// to start if user presses any key
$("em").click(function(){
  //$("#level-title").text("Level-"+level);
  $("em").hide();
  Selector();
  started = true;
})

// to detect if any button is pressed and  if user clicked in the right pattern
$(".btn").click(function(){
  var userTouched = $(this).attr("id");
  userClicked.push(userTouched);
  playSound(userTouched);
  animatePress(userTouched);
  CheckPattern(userClicked.length-1);
});

// FUnctions

function CheckPattern(currentLevel){
  if (gamePattern[currentLevel] === userClicked[currentLevel]){
    console.log("Sucess");
    if (gamePattern.length === userClicked.length){
      setTimeout(function(){
        Selector();
      },1000);
    }
  }
  else {
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("gameover");
    setTimeout(function(){
      $("body").removeClass("gameover");
    },200);
    $("#level-title").text("GameOver, click ready to play again");
    startOver();
  }
}

function Selector(){
  userClicked = [];
  level++
  $("#level-title").text("Level-"+level);
  var randy = Math.floor(Math.random()*4);
  randomChoosen = colors[randy];
  gamePattern.push(randomChoosen);

  $("#"+randomChoosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosen)
  }

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
  };
function animatePress(name){
  $("#"+name).addClass("pressed");

  setTimeout(function(){
    $("#"+name).removeClass("pressed");
  },100);
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
  $("em").show();
}
