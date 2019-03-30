import { userState } from '../controller/login.js';


export const homeTmp = () => {
  const tmp = document.createElement('section');
  tmp.setAttribute('id', 'home');
  tmp.innerHTML = `
    <div class="container-fluid padding">
        <div class="row padding">
        </div>
    <div>
        <img src="https://i.ibb.co/Xs8nvBK/GGG.png" width="250" class="img-margin">
        <p class="h4 container margen">Desbloquea las fallas y aprende sobre los estereotipos de género</p>
        <button  class="boton-start"id="btn-play">Jugar </button>
    </div>
    `;
    
  return tmp;
}; 