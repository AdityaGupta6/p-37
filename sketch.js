var canvas;
var quiz;
var question
var gameState
var database
var contestantCount
var contestant
var allContestants
var title2

function setup(){
canvas = createCanvas(920,650);
  database=firebase.database();
quiz=new Quiz()
quiz.getState()


 quiz.start()
 
}


function draw(){
  background("pink");
  
  if (contestantCount===4) {
     quiz.update(1)
  }
  if (gameState===1) {
    background("yellow");
    title2=createElement("h2")
    title2.html("Result of the quiz");
    title2.position(220,50);
    quiz.play()




  }


}
