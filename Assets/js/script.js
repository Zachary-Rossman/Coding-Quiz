// Global Variables
let startQuizbtn = document.querySelector("#startQuiz");
let qDiv = document.querySelector("#questions");
//array of objects for questions
let questions = [
    {
        question: '"Which file makes an app functional?',
        choices: ['HTML+','CSS', 'HTML', 'Javascript'],
        answer: 'Javasript',
    },
    {
        question: 'What is used to see what happens when a user clicks a button or types on an app?',
        choices: ['jquery','a new API', 'console.log', 'a method'],
        answer: 'console.log',
    },
    {
        question: '"Why would a developer want to use javascript?',
        choices: ['it makes you feel like a genius','it is complicated, avoid it at all cost', 'to make an app functional', 'it looks cool'],
        answer: 'to make an app functional',
    },
    {
        question: '"What is the house of a website?',
        choices: ['HTML+','CSS', 'HTML', 'Javascript'],
        answer: 'HTML',
    },
]

let questionsIndex = 1

//record score; start with zero
let score = 0;

// Functions

function startQuiz(){
    createbuttons(0);
}
function createbuttons(index){

    let title = document.createElement("h2");
    title.textContent = questions[index].title;
    qDiv.appendChild[title];

    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[index].choices[0];
    buttonOne.dataset.anser = questions[index].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = questions[index].choices[1];
    buttonTwo.dataset.anser = questions[index].answer;
    qDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = questions[index].choices[2];
    buttonThree.dataset.anser = questions[index].answer;
    qDiv.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = questions[index].choices[3];
    buttonFour.dataset.anser = questions[index].answer;
    qDiv.appendChild(buttonFour);
}

// Function Calls

startQuizbtn.addEventListener("click", startQuiz);

// After user has clicked their choice
qDiv.addEventListener("click", function(event) {
    console.log(event);
    let choice = event.target.innerHTML;
    let answer = event.target.dataset.answer;

    if(choice === answer){
        alert('correct');
        // Go to next question
        createbuttons(1);
        // Score
        score++;
    } else if (choice !== answer){
        alert('incorrect');
        // Go to next question
        createbuttons(questionsIndex);
        // QuestionsIndex
        questionsIndex++;
        // Score
        score--;
    }
})