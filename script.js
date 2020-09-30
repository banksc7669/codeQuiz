const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    c = 100;
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }   else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function timer001() {
    c = c - 1;
    if (c < 100) {
        time001.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=";
    }
}

update = setInterval("timer001()", 1000);

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "booleans", correct: false},
            { text: "alert", correct: true },
            { text: "strings", correct: false},
            { text: "numbers", correct: false },
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<javascript>", correct: false},
            { text: "<js>", correct: false },
            { text: "<scripting>", correct: false},
            { text: "<script>", correct: true },
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "the <head> section", correct: false},
            { text: "the <body> section", correct: false },
            { text: "both the <head> section and the <body> section", correct: true},
        ]
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: [
            { text: "Yes", correct: true},
            { text: "No", correct: false },
        ]
    }
]
console.log("let the games begin")
