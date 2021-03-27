class Quiz{
    constructor(){

    }
getState(){
    var gameStateRef=database.ref('gameState1');
    gameStateRef.on("value",function (data) {
        gameState=data.val()

        
    });
}
update(gameState2){
    var stateRef=database.ref('/');
    stateRef.update({
        gameState1:gameState2
    })
}
async start(){
    contestant=new Contestant();
    
    var contestantCountRef=await database.ref('contestantCount').once("value");
  
    if (gameState===0) {
        
        if (contestantCountRef.exists()) {
            contestantCount=contestantCountRef.val()
            contestant.getCount()
             }
            question=new Question()
            question.display();
        
    }
}

play(){
    var correctAns="2";
    Contestant.getContestantInfo()

    var displayPosition=430
     for (var  prl in allContestants) {
         displayPosition+=50
        if (allContestants!==undefined){
textSize(25)
if (correctAns==allContestants[prl].answer) {
    fill ("green");
} else {
    fill ("red")
} 
text(allContestants[prl].name + ":" + allContestants[prl].answer,50,displayPosition)          
}
}
}

}