// based on id, store in variable(section)
const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const questionCard = document.getElementById("question-card")
const answerList = document.getElementById("answer-list")
const nextBtn = document.getElementById("next-btn")
const endScreen = document.getElementById("end-screen")

// based on class name, store in variable (buttons)
const answerBtnsCollection = document.getElementsByClassName("answer-btn")
const answerBtnsNodeList = document.querySelectorAll(".answer-btn")

console.log(answerBtnsCollection);
console.log(answerBtnsNodeList);

const btnsArray = Array.from(answerBtnsNodeList)

gameTitle.textContent = "⚡ Quick Fire Trivia"

console.log("First question:", questionText.textContent)
questionNumber.textContent = questionNumber.textContent.toUpperCase()


const firstBtn = answerBtnsNodeList[0]
const firstLi = firstBtn.parentElement

console.log("The first button:", firstBtn)
console.log("Its parent <li>:", firstLi)
console.log("The <ul> that holds all buttons:", firstLi.parentElement)




questionCard.classList.remove("answered")
// Back to normal

