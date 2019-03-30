import {loadNextQuestion} from '../controller/game-script.js'

export const game1Tmp = () => {
  const tmp = document.createElement('section');
  tmp.innerHTML = `
        <div>
            <img src="" alt="">
            <p>¿Como se llama mi gato?</p>
        </div>
        <div>
          <button type="button" id="btn-c"  value="0">Michi</button>
          <button type="button" id="btn-d"  value="1">Tom</button>
        </div>
    `;
  return tmp;
};

export const gameTmp = () => {
  const tmp = document.createElement('section');
  tmp.innerHTML = `
      <div>
        <img src="" alt="">
          <p>¿Como se llama mi perro?</p>
      </div>
        <div>
          <button type="button" id="btn-good"  value="1">Chester</button>
          <button type="button" id="btn-bad"  value="0">Peluchin</button>
      </div>
    `;
  const btnA = tmp.querySelector('#btn-good');
  btnA.addEventListener('click', () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(game1Tmp());
  });
  return tmp;
};

export const gameAll = () => {
 const tmpGame=document.createElement('section');
 tmpGame.innerHTML=`
 <div id="quizContainer" class="container">
        <div class="title">Computer Quiz</div>
        <div id="question" class="question" ></div>
            <label  class="option"></label><input type="radio" name="option" value="1"/><span id="opt1"></span></label>
            <label  class="option"><input type="radio" name="option" value="2"/><span id="opt2"></span></label>
            <label  class="option"><input type="radio" name="option" value="3"/><span id="opt3"></span></label>
            <label  class="option"><input type="radio" name="option" value="4"/><span id="opt4"></span></label>
            <button id="nextButton" class="next-btn">next question</button>
    </div>
    <div id ="result" class="container result" style="display:none">
  </div>
 `;
const nextButton=tmpGame.querySelector('#nextButton');
nextButton.addEventListener('click',()=>{
   loadNextQuestion();
});
return tmpGame;
}
