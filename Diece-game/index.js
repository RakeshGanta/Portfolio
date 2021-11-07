// var num = Math.ceil((Math.random()*6));
// var image ="images/dice"+num+".png";
// document.querySelectorAll("img")[0].setAttribute("src",image);
// var num2 = Math.ceil((Math.random()*6));
// var image2 ="images/dice"+num2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",image2);
// if (num > num2){
//   document.querySelector("h1").innerHTML="Player 1 Wins ";
// }
// else if (num < num2){
//   document.querySelector("h1").innerHTML="Player 2 Wins ";
// }
// else {
//   document.querySelector("h1").innerHTML="Draw ";
// }
$(".btn").click(function(){
  dice()
});
function dice(){
  var num = Math.ceil((Math.random()*6));
  var image ="images/dice"+num+".png";
  document.querySelectorAll("img")[0].setAttribute("src",image);
  // $("dice1.png").attr("src",image);
  var num2 = Math.ceil((Math.random()*6));
  var image2 ="images/dice"+num2+".png";
  // $("dice2.png").attr("src",image2);
  document.querySelectorAll("img")[1].setAttribute("src",image2);
  check(num,num2)
}
function check(num,num2){

  if (num > num2){
    $("h1").text("Player 1 Wins ");
  }
  else if (num < num2){
    $("h1").text("Player 2 Wins ");
  }
  else {
    $("h1").text("Draw");
  }
}
