
let score = 0;
let counter = document.querySelector('.score');
const qbox = document.querySelectorAll('.all-questions div');
const q1 = document.querySelector('.question-1');
const q2 = document.querySelector('.question-2');
const q3 = document.querySelector('.question-3');
const q4 = document.querySelector('.question-4');
const q5 = document.querySelector('.question-5');

const startBtn = document.querySelector(".start-quiz-btn");
const introBox = document.querySelector(".intro-box");
const questionSection = document.querySelector('.question-section');
const navigationBox = document.querySelector('.navigationBtn');
const scoreBox = document.querySelector('.scorebox');
const result = document.querySelector('.result');


// Starts the quiz
startBtn.addEventListener('click', function () {
    introBox.style.display = 'none';
    questionSection.style.display = 'block';
    navigationBox.style.visibility = 'visible';
    document.querySelector('.first-nav-ul').style.visibility = 'visible';
});



// QUESTIONS ANIMATION
const questionContainer = document.querySelector('.all-questions');
const uls = document.querySelectorAll('.all-questions div');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.previousBtn');
let ulCounter = 0;
const size = uls[0].clientWidth;


questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';

// when clicked, goes to the next question
nextBtn.addEventListener('click', () => {
    questionContainer.style.transition = 'transform 0.4s ease-in-out';
    ulCounter++;
    if (ulCounter > uls.length - 1) {
        showResult();
    } else {
        questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';
    }
});


// When clicked, goes to the previous question
prevBtn.addEventListener('click', () => {
    questionContainer.style.transition = 'transform 0.4s ease-in-out';
    ulCounter--;

    if (ulCounter < uls.length - 1) {

    } else {
        questionContainer.style.transform = 'translateX(' + (-size * ulCounter) + 'px)';
    }
});



// Hide questions to display hero
questionSection.style.display = 'none';
navigationBox.style.visibility = 'hidden';

// Show result after quiz ends
const showResult = () => {
    questionSection.style.display = 'none';
    navigationBox.style.display = 'none'
    const youDidWell = 'Congratulations! you passed';
    const notSoGood = 'Maybe you should change career?';
    let msg = `<h2>Game ended</h2> 
        <div>`;
    
    if (score >= uls.length - 2) {
        msg += youDidWell;
    } else {
        msg += notSoGood; 
    }
       msg += `<p>You scored: ${score} point(s)</p>
           
           <button onclick="restartGame();">Restart</button>
        </div>
    `;
    result.style.color = 'white';
    result.style.display = 'flex';
    result.style.flexDirection = 'column';
    result.style.textAlign = 'center';
    result.style.width = '80%';
    result.innerHTML = msg;

}

const restartGame = () => {
    score = 0;
    window.location = '';
}




// Questions 1 - 5 functions   

function questionOne(index) {

    // Question and Options array
    const questions = [
        {
            "question1": "What is HTML",
            "options": {
                "a": "Hypertext Tranfer Protocol",
                "b": "Hypertext Transmission Protocol",
                "c": "Hypertext Technical Protocal"
            },
            "answer": "Hypertext Tranfer Protocol"
        }
    ];

    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];

    // give correct background and text color based on answer  
    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q1.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q1.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }

}

function questionTwo(index) {

    // Question and Options array
    const questions = [
        {
            "question2": "What is the plural form of Stadium?",
            "options": {
                "a": "Stadiums",
                "b": "Stadius",
                "c": "Stadia"
            },
            "answer": "Stadia"
        }
    ];

    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];

    // give correct background and text color based on answer

    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q2.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q2.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }

}

function questionThree(index) {

    // Question and Options array
    const questions = [
        {
            "question3": "Which is correct?",
            "options": {
                "a": "An img tag has a closing tag",
                "b": "An img tag is a self closing tag",
                "c": "An img tag does not have a tag"
            },
            "answer": "An img tag is a self closing tag"
        }
    ];

    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];

    // give correct background and text color based on answer

    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q3.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q3.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }

}

function questionFour(index) {

    // Question and Options array
    const questions = [
        {
            "question4": "Which of the following is the correct way to start a formal letter?",
            "options": {
                "a": "To whom it may concern",
                "b": "Dear Sir/Madam",
                "c": "Hi Baby"
            },
            "answer": "Dear Sir/Madam"
        }
    ];

    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];

    // give correct background and text color based on answer

    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q4.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q4.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }

}

function questionFive(index) {

    // Question and Options array
    const questions = [
        {
            "question5": "What HTML attribute prevents a form from submitting an empty field(s)?",
            "options": {
                "a": "prevent",
                "b": "restrict",
                "c": "required"
            },
            "answer": "required"
        }
    ];

    const userAnswer = index.innerHTML;
    const correctAnswer = questions[0]['answer'];

    // give correct background and text color based on answer

    if (userAnswer === correctAnswer) {
        index.style.backgroundColor = 'green';
        index.style.color = 'white';
        q5.classList.add('noClicking');
        score++;
        counter.innerHTML = score + ' / ' + qbox.length;
    } else {
        index.style.backgroundColor = 'red';
        index.style.color = 'white';
        q5.classList.add('noClicking');
        score += 0;
        counter.innerHTML = score + ' / ' + qbox.length;
    }

} 