// The start button function to commence the game and disappears once clicked
$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})

// another click function for the answer button 
$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
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
    //shows the unanswered questions

    //starts the countdown
    countDown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Times up!");
            game.timeUp();
        }
    },
    // loads question
    loadQuestion: function(){
        //every 1 second the counter will go down
        timer = setInterval(game.countDown,1000);
        //posts the question to page
        $("#subWrapper").html("<h2>"+question[game.currentQuestion].question+"</h2>");
        //buttons to post questions
            for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
                $('#subWrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
            }
    },
    // shows next question
    nextQuestion: function(){
        //time for questions
        game.counter= 30;
        //adds to html 
        $("#counter").html(game.counter);
        //loops to next question
        game.currentQuestion++;
        // loads the question
        game.loadQuestion();
    },
    // when the time is up
    timeUp: function(){
        clearInterval(timer);
        game.unAnswered++;
        // SubWrapper shows time ran out
        $('#subWrapper').html('<h2> Out of time, Sorry!</h2>');
        // shows what the answer should have been
        $('#subWrapper') .append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        // copy & paste if/else statement from the answer functions 
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    // shows result
    results: function(){
        clearInterval(timer);
        $('#subWrapper').html("<h2>Complete!</h2>");
        $('#subWrapper').append("<h3>Correct: "+game.correct+"</h3>");
        $('#subWrapper').append("<h3>Incorrect: "+game.incorrect+"</h3>");
        $('#subWrapper').append("<h3>unAnswered: "+game.unAnswered+"</h3>");
        
    },
    // click function
    clicked: function(){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    // when answered correctly
    answeredCorrectly: function(){
        console.log("Correct!");
        clearInterval(timer);
        game.correct++;
        $('#subWrapper').html('<h2>Yayy!!You got it right!!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    // when answered incorrectly 
    answeredIncorrectly: function(){
        console.log("Incorrect!");
        clearInterval(timer);
        game.Incorrect++;
        $('#subWrapper').html('<h2>Oh no its wrong!!!</h2>');
        $('#subWrapper') .append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    // resets the game
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unAnswered = 0;
        game.loadQuestion 

    },

    }