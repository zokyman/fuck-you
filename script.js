const questionsText = document.getElementById("questions")
const scoreText = document.getElementById("score");
const questionsAnswered = document.getElementById("questions-answered");
const questionOptions0  = document.getElementById("option1");
const questionOptions1 = document.getElementById("option2");
const questionOptions2 = document.getElementById("option3");
const questionOptions3 = document.getElementById("option4");
const afterQuizText = document.getElementById("word");
const afterQuizTextTwo = document.getElementById("word-two");
const timeCountDown = document.getElementById("time");

const questions = [
    {
        question  : "Who is The United States President?",
        options: ["Zoky", "Donald J. Trump", "Charlie Kirk", "Vladmir Putin"],
        answer: "Charlie Kirk",
    },
    {
        question : "I'm gay and I like.....?",
        options: ["Dih", "Dudes", "Big-dih", "Girls"], 
        answer: "Big-dih",
    },
    {
        question : "Greatest Footballer of all time?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "King Von", "Zoky"],
        answer: "Zoky",
    },
    {
        question : "Greatest Football Club?",
        options: ["Shit United", "Real Madird God's own club", "Varca", "Eyimba"],
        answer: "Real Madird God's own club",
    },
    {
        question : "Who is gay?",
        options: ["Gay", "Lil Nas X", "YOU!!!!!", "I don't know?"],
        answer: "YOU!!!!!",
    },
    {
        question : "What is my name?",
        options: ["Zoky", "Zokyman", "Zoky da goat", "Zokyman da goat"],
        answer: "Zokyman da goat",
    },
    {
        question : "Best Entertainer of all time?",
        options: ["Zoky", "Taylor Swift", "Erika Kirk", "Glorious King Mike"],
        answer: "Glorious King Mike",
    },
    {
        question : "How old is zoky?",
        options: ["67(67!!! get it?)", "20", "18", "40+"],
        answer: "40+",
    },
    {
        question : "World most handsome man?",
        options: ["Zoky", "Zoky", "Zoky", "Zoky"],
        answer: "Zoky",
    },
    {
        question : "Richest Dude on the planet",
        options: ["None of the above because I can't find zoky da goat", "The guy that owns twitter", "Facebook founder", "Trump or summ"],
        answer: "None of the above because I can't find zoky da goat",
    },
];

const optionButtons = [
    questionOptions0,
    questionOptions1,
    questionOptions2,
    questionOptions3,
];

let score = 0;
let currentQuestion = 0;
let setTimerInterval;




function showQuestion() {
    questionsText.textContent = questions[currentQuestion].question;
    questionOptions0.textContent = questions[currentQuestion].options[0];    
    questionOptions1.textContent = questions[currentQuestion].options[1];    
    questionOptions2.textContent = questions[currentQuestion].options[2];    
    questionOptions3.textContent = questions[currentQuestion].options[3];    

    optionButtons.forEach( function (button) {
        button.style.backgroundColor = "#8b5cf6";
        button.disabled = false;
    });
    timeCountDown.textContent = 15;
    time();
}

function increaseQuestionAnswered() {
    let questionAnswered = Number(questionsAnswered.textContent);
    questionAnswered += 1;
    questionsAnswered.textContent = questionAnswered;
}
function checkAnswer(chosen) {
    increaseQuestionAnswered();
    clearInterval(timerSetInterval);
    let correctAnswer = questions[currentQuestion].answer; 
    questionOptions0.disabled = true;
    questionOptions1.disabled = true;
    questionOptions2.disabled = true;
    questionOptions3.disabled = true;
    if (chosen.textContent === questions[currentQuestion].answer) {
        score += 1;
        scoreText.textContent =  + score;
        chosen.style.backgroundColor = 'green';
        goToNext();
    } else {
        chosen.style.backgroundColor = 'red';
        if (questionOptions0.textContent === correctAnswer) {
            questionOptions0.style.backgroundColor = 'green';
        }
        if (questionOptions1.textContent === correctAnswer) {
            questionOptions1.style.backgroundColor = 'green';
        }
        if (questionOptions2.textContent === correctAnswer) {
            questionOptions2.style.backgroundColor = 'green';
        }
        if (questionOptions3.textContent === correctAnswer) {
            questionOptions3.style.backgroundColor = 'green';
        }
        goToNext();
    }
}

function time() {

        timerSetInterval = setInterval(() => {
        let timeLeft = Number(timeCountDown.textContent);
        timeLeft--;
        timeCountDown.textContent = timeLeft;
        if (timeLeft === 0) {
        clearInterval(timerSetInterval);
        goToNext();
        return;
    }

    }, 1000);

}



function goToNext() {


     setTimeout(() => {
    
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
               questionsText.textContent = "Quiz is over bitch!"
               questionOptions0.style.display = "none";
               questionOptions1.style.display = "none";
               questionOptions2.style.display = "none";
               questionOptions3.style.display = "none";
               afterQuizText.style.display = "block";
               afterQuizText.textContent = `You scored ${score} / ${questions.length}`;
               if (score <= 5) {
                afterQuizTextTwo.textContent = `Seriously? ${score}? that's all you could get? Seriously how stupid can you be?`
               } else if (score <=7 ) {
                afterQuizTextTwo.textContent = `${score}? that's it? Try again and aim for 10 asshole!`
               }
               else if (score <= 9){
                afterQuizTextTwo.textContent = `${score}? Wow! You're not all stupid I guess, I mean of course you're still stupid, but not completely.`
               }
               else if(score = 10){
                afterQuizTextTwo.textContent = `${score}!! That's great.....DIPSHIT!!!!`
               }
            }

            

    }, 2000);
}
  
questionOptions0.addEventListener('click', function () {
    checkAnswer(questionOptions0)
});
questionOptions1.addEventListener('click', function () {
    checkAnswer(questionOptions1)
});
questionOptions2.addEventListener('click', function () {
    checkAnswer(questionOptions2)
});
questionOptions3.addEventListener('click', function () {
    checkAnswer(questionOptions3)
});


showQuestion();
