import { userState } from '../controller/login.js';


export const homeTmp = () => {
  const tmp = document.createElement('section');
  tmp.setAttribute('id', 'home');
  tmp.innerHTML = `
    <div class="container-fluid padding">
        <div class="row padding">
        </div>
    <div>

        <p>lorem ipsum</p>
        <button id="btn-play">Jugar </button>
    </div>
    `;
    
  return tmp;
}; 