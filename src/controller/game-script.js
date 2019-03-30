import {questions} from '../bd/questions.js';
// import { getScore, addDoc } from '../controller/game.js';

let currentQuestion = 0;
let points = 0;
const totQuestions = questions.length;
const container = document.getElementById('quizContainer');
const questionEl = document.getElementById('question');
const imageContent=document.getElementById('img-content');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const nextButton = document.getElementById('nextButton');
const resultCont = document.getElementById('result');

const loadQuestion = (questionIndex) => {

  const q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '.' + q.question;

  
  const createImg=document.createElement('div')
  const imgSrc = `<img src="${q.gif}">`
  createImg.innerHTML=imgSrc;
  imageContent.appendChild(createImg);

  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
};

// const sumPoints = (obj, points) => obj.score += points;

export const loadNextQuestion = () => {
  const selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption) {
    alert('please select your answer');
  }
  const answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    points += 100;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  if (currentQuestion == totQuestions) {
    container.style.display = 'none';
    resultCont.style.display = 'block';
    resultCont.textContent = 'Puntaje :' + points;
    // const obj = addDoc(ee => ee.forEach(element => {
    //     const values = sumPoints(element, points);
    //     getScore(element, values)   
    // }))
   return;
  }
  loadQuestion(currentQuestion);
  
};

loadQuestion(currentQuestion);
nextButton.addEventListener('click', () => {
  loadNextQuestion();
});