// The start button function to commence the game and disappears once clicked
$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})

// another click function for the answer button 
$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
})

// New click event for game reset 
$(document).on('click', '#reset', function(){
    game.reset();
})

// Setting up the array of questions
var questions = [{
    question: "What does Mario jump on when he completes a level?",
    answers: ["A tree", "A castle", "A flag pole", "Yoshi"],
    correctAnswer: "A flag pole",
    image: "assets/images/mario.gif"
}, {
    question: "Which videogame console did Nintendo release directly prior to the Wii?",
    answers: ["Gameboy", "Game Cube", "DreamCast", "Nintendo DS"],
    correctAnswer: "Game Cube",
    image: "assets/images/gamecube.gif"
}, {
    question: "V-Bucks are the in-game currency for which famous videogame franchise?",
    answers: ["Forza", "Call of Duty", "Pokemon", "Fortnite"],
    correctAnswer: "Fortnite",
    image: "assets/images/fortnite.gif"
}, {
    question:"The word Pokémon is generally understood to be a translation of which phrase?",
    answers: ["Small Monsters", "Wild Animals", "Poke Bowl", "Pocket Monsters"],
    correctAnswer: "Pocket Monsters",
    image: "assets/images/pokemon.gif"
}, {
    question: "What are the professions of Mario and his brother Luigi?",
    answers: ["Italian Chefs", "Construction Workers", "Plumbers", "Lawyers"],
    correctAnswer: "Plumbers",
    image: "assets/images/mario-luigi.gif"
}, {
    question: "The original designer behind the game Tetris is from which nation?",
    answers: ["Russia", "Japan", "Vietnam", "China"],
    correctAnswer: "Russia",
    image: "assets/images/tetris.gif"
}, {
    question: "What does NES stand for?",
    answers: ["Non Essential System", "New Entertainment System", "Nintendo Entertainment System", "New Era System"],
    correctAnswer: "Nintendo Entertainment System",
    image: "assets/images/nes.gif"
}, {
    question: "The most-popular American football videogame franchise is named after which individual?",
    answers: ["Tom Brady", "John Madden", "Peyton Manning", "Michael Jordan"],
    correctAnswer: "John Madden",
    image: "assets/images/madden.gif"
}, {
    question: "What is the all-time highest grossing game",
    answers: ["Pokemon", "Fortnite", "Mortal Kombat", "World of Warcraft"],
    correctAnswer: "World of Warcraft",
    image: "assets/images/wwc.gif"
}, {
    question: "What's the color of the wings of Dragon in Spyro?",
    answers: ["Blue", "Orange", "Green", "Purple"],
    correctAnswer: "Orange",
    image: "assets/images/spyro.gif"
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
    unAnswered:0,
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
        //html statement here
        $("#subWrapper").html("<h2>Time remaining <span id='counter'>30</span> Seconds </h2>");
        //posts the question to page
        $("#subWrapper").append('<h2>'+questions[game.currentQuestion].question+'</h2>');
        //buttons to post questions
        
            for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
                $('#subWrapper').append('<button type="button" class="answer-button btn btn-light" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>&nbsp;');
            }
        
    },
    // shows next question
    nextQuestion: function(){
        //time for questions
        game.counter= 30;
        $('#counter').html(game.counter);
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
        game.showImage();
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
        $('#subWrapper').append("<h3>Un-Answered: "+game.unAnswered+"</h3>");
        $('#subWrapper').append("<button id='reset' class='btn btn-secondary'> Reset</button>");
    },
    // click function
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },

    showImage: function() {
        $('#subWrapper').append('<img src="'+questions[game.currentQuestion].image+'" />');
    },
    // when answered correctly
    answeredCorrectly: function(){
        console.log("Correct!");
        clearInterval(timer);
        game.correct++;
        $('#subWrapper').html('<h2>Yayy!!You got it right!!</h2>');
        game.showImage();
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
        game.incorrect++;
        $('#subWrapper').html('<h2>Oh no its wrong!!!</h2>');
        $('#subWrapper') .append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
        game.showImage();
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
        game.loadQuestion();
        
        











    },
    }