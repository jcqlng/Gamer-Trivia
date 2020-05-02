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
    },
    // loads question
    loadQuestion: function(){
    },
    // shows next question
    
    
    // when the time is up

    // shows result

    // click function
    
    // when answered correctly

    // when answered incorrectly 



    });
    


}