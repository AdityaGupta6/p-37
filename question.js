class Question{
    constructor(){
        
    }
    
    display(){
    var title=createElement('h1')
    var question=createElement('h2')
    var option1=createElement('h2')
    var option2=createElement('h2')
    var option3=createElement('h2')
    var option4=createElement('h2')
    var input1=createInput("Enter your name")
    var input2=createInput("Enter your answer")
    var button=createButton("Submit")
    title.html("My Quiz Game");
    title.position(220,50);
    question.html("Question: What starts and ends with the letter 'E' but has only one letter ?")
    question.position(30,150);
    option1.html("1. Everyone")
    option1.position(50,250)
    option2.html("2. Envelope")
    option2.position(50,300)
    option3.html("3. Europe")
    option3.position(50,350)
    option4.html("4. Example")
    option4.position(50,400)

    input1.position(50,500)
    input2.position(300,500)
    button.position(50,580)
    
button.mousePressed(()=>{
    title.hide()
        input1.hide()
        input2.hide()
        button.hide()

        contestant.name=input1.value()
        contestant.answer=input2.value()
        contestantCount+=1
        contestant.index=contestantCount
        contestant.updateCount(contestantCount)
        contestant.update(contestant.name,contestant.answer)
        

    })
}
}