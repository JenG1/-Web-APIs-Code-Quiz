//

var score = 0;


for(var i =0; i < questions.length; i++){
    var response = document.getElementById("quiz").innerHTML;
    if(response =+ questions[i].answer){
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
