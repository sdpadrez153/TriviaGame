$(document).on('click', '#start', function () {
    game.start();
});



var myQuestions = [{
    question: "1 . What Superhero does Tony Stark Turn into?",
    answers: ["Wizard Guy", "Wolverine", "Iron Man", "Barney"],
    correctAnswer: "Iron Man"
}, {
    question: "2 . What is Captian Americas real name?",
    answers: ["Donald Trump", "Matt Damon", "Celine Dion", "Steve Rogers"],
    correctAnswer: "Steve Rogers"
}, {
    question: "3 . What villian collects the Infinity Stones",
    answers: ["Thanos", "Magneto", "The Joker", "Donald Duck"],
    correctAnswer: "Thanos"
}, {
    question: "4 . What bit Spider Man to give him his powers",
    answers: ["Ant", "Snake", "Puppy", "Spider"],
    correctAnswer: "Spider"
}, {
    question: "5 . What is the name of Tony Starks Love Interest",
    answers: ["Paris Hilton", "Pepper Potts", "Jennifer Lopez", "Kim Kardashian"],
    correctAnswer: "Pepper Potts"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter === 0) {
            game.done();
        }
    },


    start: function () {

        timer = setInterval(game.countdown, 1000);

        $('#trivia').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        $('#start').remove();

        for (var i = 0; i < myQuestions.length; i++) {

            $('#trivia').append('<h2>' + myQuestions[i].question + '</h2>');

            for (var j = 0; j < myQuestions[i].answers.length; j++) {
                $("#trivia").append("<input type='radio' name='question-" + i + "' value='" + myQuestions[i].answers[j] + "'>" + '<h4>' + myQuestions[i].answers[j] + '</h4>');
            }
        }

    },


    done: function () {


        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == myQuestions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == myQuestions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == myQuestions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == myQuestions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == myQuestions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == myQuestions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function () {

        clearInterval(timer);

        $('#trivia h2').remove();
        $('#trivia').html("<h3>All done!</h3>");
        $('#trivia').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#trivia').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");



    }

};
