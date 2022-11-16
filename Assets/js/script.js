// Global Variables

let startQuizbtn = document.querySelector('startQuiz');
let questionDiv = document.querySelector('questions');


// Functions

function startQuiz(){
    alert(`I started the game!`)
    // Bring up a question
    let title = document.createElement('h2');
    title.textContent = 'Who is the best magician?'
    questionDiv.appendChild(title);
    // Add four answer options
    let btnOne = document.createElement('button');
    // make clickable

    
}

// Function Calls

startQuizbtn.addEventListener('click', startQuiz);