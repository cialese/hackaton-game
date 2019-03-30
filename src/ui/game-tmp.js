import { getUserInfo } from '../controller/game.js';

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
  const btnA = tmp.querySelector('#btn-a');
  btnA.addEventListener('click', () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(game1Tmp());
  });
  return tmp;
};

