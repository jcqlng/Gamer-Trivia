// The start button function to commence the game
$("#start").on("click", function(){
    $("#start").remove();
})

// Setting up the array of questions
var questions = [{
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}, {
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/img.gif"
}]; 

// Properties to the game
var game= {
    //the array of questions
    questions:questions,
    //current questions
    currentQuestion:0,
    //counts to 30
    counter:30,
    //shows right
    correct:0,
    //shows incorrect
    incorrect:0,
    //starts the countdown
    countDown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time up!");
            game.timeUp();
        }
    },
    // loads question
    loadQuestion: function(){
        timer = setInterval(game.countDown,1000);
        $("#subWrapper").html("<h2>"+question[game.currentQuestion].
            question+"</h2>");
            for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
                $('#subWrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
            }
    },
    // shows next question
    nextQuestion: function(){
    
    },
    // when the time is up
    timeUp: function(){

    },
    // shows result
    results: function(){

    },
    // click function
    clicked: function(){

    },
    // when answered correctly
    answeredCorrectly: function(){

    },
    // when answered incorrectly 
    answeredIncorrectly: function(){

    },
    // resets the game
    reset: function(){

    },

    }