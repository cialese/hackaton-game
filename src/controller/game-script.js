import{questions}from '../bd/questions.js'
let currentQuestion=0;
let score=0;
const totQuestions = questions.length;
const container = document.getElementById('quizContainer');
const questionEl=document.getElementById('question');
const opt1 =document.getElementById('opt1');
const opt2 =document.getElementById('opt2');
const opt3 =document.getElementById('opt3');
const opt4 =document.getElementById('opt4');


const nextButton=document.getElementById('nextButton');
const resultCont=document.getElementById('result');

 const loadQuestion =(questionIndex)=>{
  const q = questions[questionIndex];
  questionEl.textContent = (questionIndex+1)+'.'+q.question;
  opt1.textContent=q.option1;
  opt2.textContent=q.option2;
  opt3.textContent=q.option3;
  opt4.textContent=q.option4;
}
export const loadNextQuestion = () => {
    var selectedOption=document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
       alert('please select your answer');
       return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer==answer){
        score+=100;
    }
    selectedOption.checked=false;
    currentQuestion++;
    if(currentQuestion==totQuestions-1){
        nextButton.textContent='Finish';
    }
    if(currentQuestion==totQuestions){
        container.style.display='none';
        resultCont.style.display='block';
        resultCont.textContent="YOUR SCORES :"+score;
        return;
    }
    loadQuestion(currentQuestion);
}

