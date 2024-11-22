// declare all buttons
const retryB = document.getElementById('retry');
const nextB = document.getElementById("next");
const submitB = document.getElementById("submit");

//and all quiz elements
const questionText = document.getElementById("q-text");
const quizContainer = document.getElementById("options");
const resultContainer = document.getElementById("result");

document.getElementById("ctrl").style.display = "none"; //ctrl buttons are not visible before starting quiz

//declare variables for results, and Q is the question index.
let Q = 0;
let score = 0;

//QUIZ QUESTIONS + ANSWERS
const quizData = [
    {question: "What year was the first FIFA World Cup played?",
        answers: {
            'a': '1872',
            'b': '1905',
            'c': '1930',
            'd': '1946'
        },

        correctAnswer: 'c'
    },
    {question: "Where was the world's first international football match played?",
        answers: {
            'a': 'Glasgow',
            'b': 'Munich',
            'c': 'Geneiva',
            'd': 'Amsterdam'
        },
        correctAnswer: 'a'
    },
    {question: "Which country has been most successful in the World Cup?",
        answers: {
            'a': 'Argentina',
            'b': 'Brazil',
            'c': 'Italy',
            'd': 'England'
        },
        correctAnswer: 'b'
    },
    {question: "Men's football has been in the Olympics since what year?",
        answers: {
            'a': '1896',
            'b': '1900',
            'c': '1904',
            'd': '1908'
        },
        correctAnswer: 'b'
    },
    {question: "Women's football has been in the Olympics since what year?",
        answers: {
            'a': '1948',
            'b': '1956',
            'c': '1984',
            'd': '1996'
        },
        correctAnswer: 'd'
    },
    {question: "How many players are on each team in football?",
        answers: {
            'a': '7',
            'b': '9',
            'c': '11',
            'd': '13'
        },
        correctAnswer: 'c'
    },
    {question: "What is the diametre of the ball in football? ",
    answers: {
        'a': '27 inches',
        'b': '29 inches',
        'c': '31 inches',
        'd': '33 inches'
    },
    correctAnswer: 'a'
    },
    {question: "How long is a football match?",
    answers: {
        'a': '45 minutes',
        'b': '60 minutes',
        'c': '90 minutes',
        'd': '120 minutes'
    },
    correctAnswer: 'c'
    },

    {question: "Which country was the first FIFA world cup champion?",
    answers: {
        'a': 'Argentina',
        'b': 'Brazil',
        'c': 'United States of America',
        'd': 'Uruguay'
    },
    correctAnswer: 'd'

    },
    {question: "How many laws of the game are there?",
    answers: {
        'a': '17',
        'b': '10',
        'c': '5',
        'd': '22'
    },
    correctAnswer: 'a'
    },

];

function beginQuiz() {
//ctrl buttons are disabled/enabled as needed.
    nextB.disabled = false;
    submitB.disabled = true;

//declare ctr/index + show ctrl buttons + hide start button
    document.getElementById("ctrl").style.display= "block";
    document.getElementById("startquiz").style.display= "none";
    quizContainer.style.display = "block";

    //display the question
    questionText.innerHTML = (Q+1) + ". " + "<strong>" + quizData[Q].question + "</strong>";
    
    //display the options FOR HOWEVER MANY THERE ARE...
    var answers = [];
    var output = [];
    for (letter in quizData[Q].answers) {
        answers.push(
            `<label> <input type = "radio" name = "question ${Q+1}" value= "${letter}" id = "${letter}">${letter}. ${quizData[Q].answers[letter]}
            </label> <br>`
        );
    }
        output.push('<div class = "answers">' + answers.join('') + '</div>'
        );
    
    quizContainer.innerHTML = output.join('');
} 

//next function
function next() {
    checkAnswer();
    if (Q<quizData.length-1) {
        Q++;
        questionText.innerHTML = (Q+1) + ". " + "<strong>" + quizData[Q].question + "</strong>";
    }
    else {
        submitB.disabled = false;
        questionText.innerHTML = "<p>Submit your results</p>";
        nextB.disabled = true;
        quizContainer.style.display = "none";
    }
    var answers = [];
    var output = [];
    for (letter in quizData[Q].answers) {
        answers.push(
            `<label> <input type = "radio" name = "question ${Q+1}" value= "${letter}" id = "${letter}">${letter}. ${quizData[Q].answers[letter]}
            </label> <br>`
        );
    }
        output.push(
            '<div class = "answers">' + answers.join('') + '</div>'
        );
    
    quizContainer.innerHTML = output.join('');
    
}

function checkAnswer() {
    var correct = quizData[Q].correctAnswer;
    if (document.getElementById(correct).checked == true) {
        score++;
    }
}

function submit() {
    document.getElementById("ctrl").style.display ="none";
    document.getElementById("options").style.display ="none";
    questionText.style.display = "none";
    resultContainer.innerHTML = `<strong>You scored ${score} out of ${quizData.length}!</strong>`
    resultContainer.innerHTML += "<p>" + resultTier() + "</p>";
}

//retry function restarts the quiz
function retry() {
    Q = 0;
    score = 0;
    beginQuiz();
}

function resultTier() {
    var percentage = score/quizData.length * 100;
    console.log(percentage);
    var resultData = "";

    switch (true) {
        case (percentage >= 90):
            resultData = "You are a football afficianado!";
            break;
        case (percentage >= 70):
            resultData = "You are a football fan!";
            break;
        case (percentage >= 50):
            resultData = "There is room for improvement.";
            break;
        case (percentage >= 30):
            resultData = "You barely like football.";
            break;
        case (percentage >=0):
            resultData = "You don't even know what a football is.";
            break;
    }

    return resultData;
}