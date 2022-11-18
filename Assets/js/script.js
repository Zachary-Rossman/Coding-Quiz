// Global Variables
let startQuizbtn = document.querySelector("#startQuiz");
let qDiv = document.querySelector("#questions");
//array of objects for questions
let questions = [
    {
        question: '"Which file makes an app functional?',
        choices: ('HTML+','CSS', 'HTML', 'Javascript'),
        answer: 'Javasript'
    },
    {
        question: 'What is used to see what happens when a user clicks a button or types on an app?',
        choices: ('jquery','a new API', 'console.log', 'a method'),
        answer: 'console.log'
    },
    {
        question: '"Why would a developer want to use javascript?',
        choices: ('it makes you feel like a genius','it is complicated, avoid it at all cost', 'to make an app functional', 'it looks cool'),
        answer: 'to make an app functional'
    },
    {
        question: '"What is the house of a website?',
        choices: ('HTML+','CSS', 'HTML', 'Javascript'),
        answer: 'C'
    },
]
//record score; start with zero
let score = 0;

// Functions

function startQuiz(){
    // Bring up a question
    let title = document.createElement('h2');
    title.textContent = questions[0].title;
    qDiv.appendChild(title);

    // Add four answer options
    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[0].choices[1];
    buttonOne.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonOne.textContent = questions[0].choices[1];
    buttonOne.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonOne);

    let buttonThree = document.createElement("button");
    buttonOne.textContent = questions[0].choices[2];
    buttonOne.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonOne);

    let buttonFour = document.createElement("button");
    buttonOne.textContent = questions[0].choices[3];
    buttonOne.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonOne);

    // make clickable
}

// Function Calls

startQuizbtn.addEventListener("click", startQuiz);

qDiv.addEventListener("click", function (event) {
    console.log(event);
    if(choices === answer) {
        //go to next question
        //questions ++
        score++
        //choices and answers should cascade??
    }
})