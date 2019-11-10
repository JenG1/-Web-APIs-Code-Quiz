//Declare variables
var currentQuestion = 0;
var score = 0;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var subBtn = document.getElementById("submit")
var resultContainer = document.getElementById("result")

//Load question and choices for user to select.
function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
//Go through all questions, take user option anc check if that is the correct answer. If answer is correct add to score, if user is wrong go to next question. If there are not more questions stop clock and display score.
function loadNextQuestion(){
    //User clicks and checks answer
    var userChoice = document.querySelector('input[type=radio]:checked');
    //If user does not select an option
    if(!userChoice){
        alert("Please select answer");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer == answer){
        score++
    }
    userChoice.checked = false;
    currentQuestion++;
    //Add Penalty Here
    if (currentQuestion == totquestions){
        resultContainer.textContent = "Your Score" + score;
        return;
    }
    loadQuestion(currentQuestion);
}

console.log(score);


//Stopwatch
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}
