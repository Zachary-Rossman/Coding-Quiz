// Global Variables
let startQuizbtn = document.querySelector("#startQuiz");
let qDiv = document.querySelector("#questions");
let questions = [
    {
        prompt: "What is the house of a website?\n(A) HTML+\n(B) CSS\n(C)HTML\n(D) Javascript",
        answer: "C"
    },
    {
        prompt: "What is the file used to reset the styling of an app?\n(A) style.css\n(B) CSS\n(C) super_Duper.CSS\n(D) normalize.css",
        answer: "D"
    },
    {
        prompt: "Why would a developer actually want to use Javascript?\n(A) It makes you feel like a genius\n(B) Don't. It's complicated\n(C) To make the app they're developing functional\n(D) It looks cool",
        answer: "C"
    },
    {
        prompt: "Who is the President of the United States?\n(A) Johnny Depp\n(B) Deadpool\n(C) Joe Biden\n(D) Doofenshmirtz",
        answer: "C"
    },
]
let score = 0;

// For loop for questions

for(let i=0; i< questions.length; i++){
    let response = window.prompt(questions[i].prompt);
}

// Functions

function startQuiz(){
    // Bring up a question
    let title = document.createElement('h2');
    title.textContent = questions[0].title;
    qDiv.appendChild(title);
    // Add four answer options
    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[1].choices[1];
    buttonOne.dataset.answer = questions[1].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonOne.textContent = questions[2].choices[2];
    buttonOne.dataset.answer = questions[2].answer;
    qDiv.appendChild(buttonOne);

    let buttonThree = document.createElement("button");
    buttonOne.textContent = questions[2].choices[2];
    buttonOne.dataset.answer = questions[2].answer;
    qDiv.appendChild(buttonOne);

    let buttonFour = document.createElement("button");
    buttonOne.textContent = questions[3].choices[3];
    buttonOne.dataset.answer = questions[3].answer;
    qDiv.appendChild(buttonOne);
    // make clickable
}

// Function Calls

startQuizbtn.addEventListener("click", startQuiz);

questions.addEventListener("click", function () {
    if(choices === answer) {
        //go to next question
        //questions ++
        //choices and answers should cascade??
    }
})