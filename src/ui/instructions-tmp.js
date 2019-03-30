import { userState } from '../controller/login.js';


export const instructionsTmp = () => {
  const tmp = document.createElement('section');
  tmp.setAttribute('id', 'instructions');
  tmp.innerHTML = `
    <div class="container-fluid padding">
        <div class="row padding">
           <div class="col-lg-6 center-photo">
                <img src="${userState().photoURL}" alt="imagen de usario">
            </div>
        </div>
    <div>
        <h4 class="text-center"><span>Hola! </span>${userState().displayName}</h4>
        <h4 class="text-center h4 colortitle">Instrucciones</h4>
        <p class="container parrafo">Te presentaremos escenarios donde deberas identificar que tipo de estereotipo o prejuicio se esta dando.</p>
    
    </div>

    
    `;
    
  return tmp;
}; 