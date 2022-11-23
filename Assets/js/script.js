// Global Variables
let startQuizbtn = document.querySelector("#startQuiz");
let timer = document.querySelector("#timer");
let qDiv = document.querySelector("#questions");
let resultsDiv = document.querySelector("#results");
let nameDiv = document.querySelector("#enterName");
let submitDiv = document.querySelector("#submit");
let playAgain = document.querySelector("#playAgain");
let questionsIndex = 0;
let questions = [
    {
        title: 'Which file makes an app functional?',
        choices: ['HTML+','CSS', 'HTML', 'Javascript'],
        answer: 'Javascript',
    },
    {
        title: 'What is used to see what happens when a user clicks a button or types on an app?',
        choices: ['jquery','a new API', 'console.log', 'a method'],
        answer: 'console.log',
    },
    {
        title: 'Why would a developer want to use javascript?',
        choices: ['it makes you feel like a genius','it is complicated, avoid it at all cost', 'to make an app functional', 'it looks cool'],
        answer: 'to make an app functional',
    },
    {
        title: 'How would you name a file in order for it to be saved as a Javascript file?',
        choices: ['.docx','.js', '.java', '.html'],
        answer: '.js',
    },
]


//record score; start with zero
let score = 0;
let scores = JSON.parse(localStorage.getItem("scores")) || [];
let secondsLeft = 60;

// Functions

function startQuiz(){
    createbuttons(0);
}

// Timer function
function startTimer(){
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000)
};

function createbuttons(index){

    let title = document.createElement("h2");
    title.textContent = questions[index].title;
    qDiv.append(title);

    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[index].choices[0];
    buttonOne.dataset.anser = questions[index].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = questions[index].choices[1];
    buttonTwo.dataset.answer = questions[index].answer;
    qDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = questions[index].choices[2];
    buttonThree.dataset.answer = questions[index].answer;
    qDiv.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = questions[index].choices[3];
    buttonFour.dataset.answer = questions[index].answer;
    qDiv.appendChild(buttonFour);
}

function endQuiz(){
    qDiv.innerHTML = "";
    resultsDiv.textContent = "Quiz Over";
    clearInterval(timer);
    questionsIndex = 0;
    console.log(endQuiz);
    alert('Quiz Over');

    // Text box to enter name
    let enterName = document.createElement("input");
    enterName.setAttribute("placeholder", "Enter your name here...");
    nameDiv.appendChild(enterName);

    // Submit button for name
    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitDiv.appendChild(submitBtn);

//    let element = document.getElementById("#questions");
//    element.remove();
}

// Function Calls during quiz

startQuizbtn.addEventListener("click", startQuiz);

// After user has clicked their choice
qDiv.addEventListener("click", function(event) {
    console.log(event);
    let choice = event.target.innerHTML;
    let answer = event.target.dataset.answer;

    if (choice === answer){
        resultsDiv.textContent = "Correct!";
    } else {
        resultsDiv.textContent = "Wrong!";
    }
    if (timerCount = 0){
        endQuiz();
    } else {
        secondsLeft = secondsLeft - 1;
    }
    if (questionsIndex < questions.length - 1){
        questionsIndex++;
        createbuttons(questionsIndex);
   } else{
       qDiv.innerHTML = "";
       endQuiz();
   }
})

// Function calls for after quiz

// Function call for score
// Function Call for enterName
nameDiv.addEventListener('input', enterName);
// Function call for submit
submitDiv.addEventListener('click', submit);
// Function call for playAgain
// Function call for Timer