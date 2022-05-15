const quizData = [
  {
    question: "Which tag is used to list items with bullets?",
    a: "<bullet>…</bullet>",
    
    b: "<list>…</list>",
    
    c: "<ul>…</ul>",
    
    d: "<ol>…</ol>",
    
    correct: "c",
},
{
  question: "How to define a link that should open in a new page in HTML?",
  a: "<a href = “https://stackhowto.com” target = “blank”>Click Here</a>",
  b: "<a href = “https://stackhowto.com” target =“_blank”>Click Here</a>",
  c: "<a href = “https://stackhowto.com” target = “#blank”>Click Here</a>",
  d: "<a href = “https://stackhowto.com” target = “@blank”>Click Here</a>",
  
  correct: "d",
},
{
  question: "DNS translates __________",
a: "the domain name as IP address",

b: "IP address as a domain name",

c: "Both A and B are true.",

d: "the domain name as physical address (MAC)",

correct: "a",
},
{
  question: "How to define a background image for a web page?",
a: "<body background = “test.jpg”>",
b: "<body background image = “test.jpg”>",
c: "<background = “test.jpg”>",
d: "<background image = “test.jpg”>Answer",  

correct: "a",
},
{
  question: "The first page of a website is called _____.",
a: "Design page",

b: "Home page",

c: "Front page",

d: "Main page",

correct: "b",
}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const done = document.getElementById("doneBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
};

function deselectAnswers(){
  answerEls.forEach(answerEl => answerEl.checked = false)
};

function getSelected(){
  let answer 
  answerEls.forEach(answerEls => {
    if(answerEls.checked){
      answer = answerEls.id
    }
  })
  return answer
}

doneBtn.addEventListener("click", () => {
  const answer = getSelected()
  if(answer){
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length){
      loadQuiz()
    }
    else {
      quiz.innerHTML = 
      `<h3 style = "margin-top: 20px; text-align: center;" >You score is ${score}/${quizData.length} questions correctly </h3> 
      
      <button style = "color : red; text-align: center; margin-left: 700px; " onclick = "location.reload()" > Reload </button>
      `
      

     
          }
  }
});
