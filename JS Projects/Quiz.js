// document.addEventListener("DOMContentLoaded",()=> {


//     const startBtn = document.getElementById("start-btn")
//     const nextBtn = document.getElementById("next-btn")
//     const restartBtn = document.getElementById("restart-btn")
//     const questionContainer = document.getElementById("question-container")
//     const questionText = document.getElementById("question-text")
//     const  choicesList = document.getElementById("choices-list")
//     const resultContainer = document.getElementById("result-container")
//     const scoreDisplay = document.getElementById("score")


//     let currentQuestionIndex = 0
//     let score = 0

//     startBtn.addEventListener("click", startQuiz)

//     function startQuiz() {
//         startBtn.classList.add("hidden")
//         resultContainer.classList.add("hidden")
//         questionContainer.classList.remove("hidden")

//         showQuestion()
//     }

//     function showQuestion() {
//         nextBtn.classList.add("hidden")
//         questionText.textContent = questions[currentQuestionIndex].question
//         choicesList.innerHTML = ""
//         questions[currentQuestionIndex].choices.forEach(choice => {
//             const li = document.createElement("li")
//             li.textContent = choice
//             li.addEventListener("click", ()=> selectAnswer(choice))
//             choicesList.appendChild(li)
//         })
//     }

//     function selectAnswer(choice) {
//         const correctAnswer = questions[currentQuestionIndex].answer
//         if(choice === correctAnswer)
//         {
//             score++
//             nextBtn.classList.remove("hidden")
//         }
//         else nextBtn.classList.remove("hidden");
//     }

//     nextBtn.addEventListener("click",()=> {
//         currentQuestionIndex++
//         if(currentQuestionIndex < questions.length) {
//             showQuestion()
//         }
//         else {
//             showResult()
//         }
//     })

//     function showResult() {
//         questionContainer.classList.add("hidden")
//         resultContainer.classList.remove("hidden")
//         scoreDisplay.textContent = `${score} out of ${questions.length}`
//     }

//     restartBtn.addEventListener("click",()=> {
//         currentQuestionIndex = 0
//         score = 0
//         resultContainer.classList.add("hidden")
//         startQuiz()
//     })

//    const questions = [
//      {
//        question: "Who won the FIFA World Cup in 2022?",
//        choices: ["France", "Argentina", "Brazil", "Germany"],
//        answer: "Argentina",
//      },
//      {
//        question: "Which country has won the most FIFA World Cups?",
//        choices: ["Italy", "Brazil", "Germany", "Argentina"],
//        answer: "Brazil",
//      },
//      {
//        question: "Who is the all-time top scorer in the UEFA Champions League?",
//        choices: [
//          "Lionel Messi",
//          "Cristiano Ronaldo",
//          "Robert Lewandowski",
//          "Karim Benzema",
//        ],
//        answer: "Cristiano Ronaldo",
//      },
//      {
//        question: "Which club does Erling Haaland play for (as of 2025)?",
//        choices: [
//          "Manchester City",
//          "Real Madrid",
//          "Paris Saint-Germain",
//          "Borussia Dortmund",
//        ],
//        answer: "Manchester City",
//      },
//      {
//        question: "Who won the Ballon d’Or in 2023?",
//        choices: [
//          "Kylian Mbappé",
//          "Lionel Messi",
//          "Erling Haaland",
//          "Kevin De Bruyne",
//        ],
//        answer: "Lionel Messi",
//      },
//      {
//        question: "Which country hosted the 2018 FIFA World Cup?",
//        choices: ["Qatar", "Brazil", "Russia", "Germany"],
//        answer: "Russia",
//      },
//      {
//        question:
//          "What is the nickname of the Brazilian national football team?",
//        choices: [
//          "La Albiceleste",
//          "The Selecao",
//          "Les Bleus",
//          "The Three Lions",
//        ],
//        answer: "The Selecao",
//      },
//      {
//        question: "Which player is known as ‘El Pistolero’?",
//        choices: [
//          "Luis Suárez",
//          "Sergio Agüero",
//          "Gonzalo Higuaín",
//          "Carlos Tevez",
//        ],
//        answer: "Luis Suárez",
//      },
//      {
//        question: "Which club has won the most UEFA Champions League titles?",
//        choices: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
//        answer: "Real Madrid",
//      },
//      {
//        question:
//          "Who scored the winning goal in the 2014 FIFA World Cup final?",
//        choices: [
//          "Lionel Messi",
//          "Mario Götze",
//          "Thomas Müller",
//          "André Schürrle",
//        ],
//        answer: "Mario Götze",
//      },
//      {
//        question: "Which English club is nicknamed ‘The Red Devils’?",
//        choices: ["Liverpool", "Manchester United", "Chelsea", "Arsenal"],
//        answer: "Manchester United",
//      },
//      {
//        question:
//          "Who is the captain of Portugal’s national football team (as of 2025)?",
//        choices: [
//          "Bruno Fernandes",
//          "Cristiano Ronaldo",
//          "Bernardo Silva",
//          "Ruben Dias",
//        ],
//        answer: "Cristiano Ronaldo",
//      },
//      {
//        question: "Which player is famous for the ‘Panenka’ penalty style?",
//        choices: [
//          "Antonín Panenka",
//          "Zinedine Zidane",
//          "Andrea Pirlo",
//          "Ronaldinho",
//        ],
//        answer: "Antonín Panenka",
//      },
//      {
//        question: "Which country won the first ever FIFA World Cup (1930)?",
//        choices: ["Uruguay", "Brazil", "Argentina", "Italy"],
//        answer: "Uruguay",
//      },
//      {
//        question: "Which player is nicknamed ‘The Egyptian King’?",
//        choices: ["Mohamed Salah", "Riyad Mahrez", "Hakim Ziyech", "Sadio Mané"],
//        answer: "Mohamed Salah",
//      },
//    ];

// })


// Attemt 2 



document.addEventListener("DOMContentLoaded",()=> {


  let currentIndex = 0
  let score = 0

  const questionContainer = document.getElementById("question-container")
  const questionText = document.getElementById("question-text")
  const choiceList = document.getElementById("choices-list")
  const nextButton = document.getElementById("next-btn")
  const resultContainer = document.getElementById("result-container")
  const scoreCal = document.getElementById("score")
  const startButton = document.getElementById("start-btn")
  const restartButton = document.getElementById("restart-btn")
  

  startButton.addEventListener("click", startQuiz)

  function startQuiz() {
    questionContainer.classList.remove("hidden")
    resultContainer.classList.add("hidden")
    startButton.classList.add("hidden")

    showQuestions()
  }

  function showQuestions() {
    questionText.textContent = questions[currentIndex].question
    choiceList.innerHTML = ""
    questions[currentIndex].
    const li = document.createElement("li")
    
  }



   const questions = [
     {
       question: "Who won the FIFA World Cup in 2022?",
       choices: ["France", "Argentina", "Brazil", "Germany"],
       answer: "Argentina",
     },
     {
       question: "Which country has won the most FIFA World Cups?",
       choices: ["Italy", "Brazil", "Germany", "Argentina"],
       answer: "Brazil",
     },
     {
       question: "Who is the all-time top scorer in the UEFA Champions League?",
       choices: [
         "Lionel Messi",
         "Cristiano Ronaldo",
         "Robert Lewandowski",
         "Karim Benzema",
       ],
       answer: "Cristiano Ronaldo",
     },
     {
       question: "Which club does Erling Haaland play for (as of 2025)?",
       choices: [
         "Manchester City",
         "Real Madrid",
         "Paris Saint-Germain",
         "Borussia Dortmund",
       ],
       answer: "Manchester City",
     },
     {
       question: "Who won the Ballon d’Or in 2023?",
       choices: [
         "Kylian Mbappé",
         "Lionel Messi",
         "Erling Haaland",
         "Kevin De Bruyne",
       ],
       answer: "Lionel Messi",
     },
     {
       question: "Which country hosted the 2018 FIFA World Cup?",
       choices: ["Qatar", "Brazil", "Russia", "Germany"],
       answer: "Russia",
     },
     {
       question:
         "What is the nickname of the Brazilian national football team?",
       choices: [
         "La Albiceleste",
         "The Selecao",
         "Les Bleus",
         "The Three Lions",
       ],
       answer: "The Selecao",
     },
     {
       question: "Which player is known as ‘El Pistolero’?",
       choices: [
         "Luis Suárez",
         "Sergio Agüero",
         "Gonzalo Higuaín",
         "Carlos Tevez",
       ],
       answer: "Luis Suárez",
     },
     {
       question: "Which club has won the most UEFA Champions League titles?",
       choices: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
       answer: "Real Madrid",
     },
     {
       question:
         "Who scored the winning goal in the 2014 FIFA World Cup final?",
       choices: [
         "Lionel Messi",
         "Mario Götze",
         "Thomas Müller",
         "André Schürrle",
       ],
       answer: "Mario Götze",
     },
     {
       question: "Which English club is nicknamed ‘The Red Devils’?",
       choices: ["Liverpool", "Manchester United", "Chelsea", "Arsenal"],
       answer: "Manchester United",
     },
     {
       question:
         "Who is the captain of Portugal’s national football team (as of 2025)?",
       choices: [
         "Bruno Fernandes",
         "Cristiano Ronaldo",
         "Bernardo Silva",
         "Ruben Dias",
       ],
       answer: "Cristiano Ronaldo",
     },
     {
       question: "Which player is famous for the ‘Panenka’ penalty style?",
       choices: [
         "Antonín Panenka",
         "Zinedine Zidane",
         "Andrea Pirlo",
         "Ronaldinho",
       ],
       answer: "Antonín Panenka",
     },
     {
       question: "Which country won the first ever FIFA World Cup (1930)?",
       choices: ["Uruguay", "Brazil", "Argentina", "Italy"],
       answer: "Uruguay",
     },
     {
       question: "Which player is nicknamed ‘The Egyptian King’?",
       choices: ["Mohamed Salah", "Riyad Mahrez", "Hakim Ziyech", "Sadio Mané"],
       answer: "Mohamed Salah",
     },
   ];


})