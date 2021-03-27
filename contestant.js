class Contestant{
    constructor(){
this.name=null
this.answer=null
this.index=null
    }

getCount(){
    var contestantCountRef=database.ref('contestantCount');
    contestantCountRef.on("value",function (data) {
        contestantCount=data.val()
        
    });

}
    updateCount(count){
        database.ref('/').update({contestantCount:count})
    
    }
  update(){
        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            answer:this.answer,
        name:this.name});   
    }  

     static getContestantInfo(){
        var contestantInfoRef1=database.ref("contestants")
        contestantInfoRef1.on("value",(data)=>{
            allContestants= data.val();
        })
    }


}
