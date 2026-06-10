const questions = [
  {
    text: "What is Adobe After Effects mainly used for?",
    answers: [
      "Video effects and motion graphics",
      "Writing code",
      "Image Compression",
      "Web Hosting"
    ],
    correct: 0  // index of the correct answer in the answers array
  },
  {
    text: "Which tool is commonly used for coding and text editing?",
    answers: [
      "Photoshop",
      "Vs Code",
      "Premiere Pro",
      "After Effects"
    ],
    correct: 1  // index of the correct answer in the answers array
  },
    {
    text: "What does a “timeline” represent in editing software?",
    answers: [
      "File storage system",
      "Sequence of edits over time",
      "Internet speed",
      "Keyboard shortcuts"
    ],
    correct: 1  // index of the correct answer in the answers array
  },
    {
    text: "What is a keyframe used for in editing?",
    answers: [
      "Saving a file",
      "Marking start/end of an animation change",
      "Exporting video",
      "Deleting layers"
    ],
    correct: 1  // index of the correct answer in the answers array
  },
  {
    text: "What is the purpose of the Preview button in editing software?",
    answers: [
      "Delete the project",
      "Test how the final edit looks or plays",
      "Rename files",
      "Create a new folder"
    ],
    correct: 1 // index of the correct answer in the answers array
  },

]


let currentIndex = 0
let score = 0

function loadQuestion(index) {
    //questions index stored inside question variable
    const question = questions[index];

    const questionafter = index + 1
    //update question number
    questionNumber.textContent = "Question " + questionafter + " of " + questions.length;

    //update text
    questionText.textContent = question.text;

// search obj in array
    for (let i = 0; i < btnsArray.length; i++) {
        //put question answers into array
        btnsArray[i].textContent = question.answers[i];
    }

    nextBtn.classList.add('hidden')

    questionCard.classList.remove('answered')
    


    

}






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

//store inside array
const btnsArray = Array.from(answerBtnsNodeList)


//change content
gameTitle.textContent = "⚡ Quick Fire Trivia"



console.log("First question:", questionText.textContent)
//make it uppercase
questionNumber.textContent = questionNumber.textContent.toUpperCase()


const firstBtn = answerBtnsNodeList[0]
const firstLi = firstBtn.parentElement

console.log("The first button:", firstBtn)
console.log("Its parent <li>:", firstLi)
console.log("The <ul> that holds all buttons:", firstLi.parentElement)




questionCard.classList.remove("answered")
// Back to normal

loadQuestion(0)