//variables
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var playScore;
var wins=0;
var losses=0;
var compNum;

function resetGame(){
    crystal1 = Math.floor(Math.random()* 12) + 1;

    crystal2 = Math.floor(Math.random()* 12) + 1;

    crystal3 = Math.floor(Math.random()* 12) + 1;

    crystal4 = Math.floor(Math.random()* 12) + 1;

    //Number to Be Matched
    compNum = Math.floor(Math.random()*102) + 19;
    //Players score
    playScore=0;
    $("#goalScore").text(compNum)
    $("#losses").text(losses);
    $("#wins").text(wins);
    $("#totalScore").text(playScore);
}

function checkScore() {
    console.log("RunningcheckScore")
    if (playScore === compNum) {
        wins++
        resetGame()
    } else if(playScore > compNum) {
        losses++
        resetGame()
    }
}

 $("#crystal1").on("click", function() {
     playScore += crystal1;
     $("#totalScore").text(playScore);
     checkScore();
 });

 $("#crystal2").on("click", function() {
    playScore += crystal2;
    $("#totalScore").text(playScore);
    checkScore();
});

$("#crystal3").on("click", function() {
    playScore += crystal3;
    $("#totalScore").text(playScore);
    checkScore();
});

$("#crystal4").on("click", function() {
    playScore += crystal4;
    $("#totalScore").text(playScore);
    checkScore();
});

resetGame()