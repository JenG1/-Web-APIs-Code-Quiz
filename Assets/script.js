//

var score = 0;
var response = "";


for(var i =0; i < questions.length; i++){
    if(response === questions[i].answer){
        score++
    } else{
        timer++;
    }
}
//Stopwatch
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 0;

    function myClock() {
        document.getElementById("timer").innerHTML = ++c;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}
