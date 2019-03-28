import{googleOnSubmit,facebookOnSubmit}from '../controller/login.js';

export const signInForm = () => {
    const formElem = document.createElement('section');
    formElem.setAttribute('id', 'signin');
    const tempformLogin = `
      <div>
      <h1 class="h1 text-center titleh1">¡GENIAL EMPECEMOS!</h1>
        <div class="container">
          <div class="img-logo">    
          </div>
          <div class="btn-group-vertical container-btn">
            <a href="#" class="fb btn btnF " id ="facebook-login">
            <i class="fab fa-facebook-square "> </i><strong class="fb-text"> Login with Facebook</strong>
            </a>
            <a href="#" class="google btn" id="google-login">
            <img src="/img/search.png" class="icon"><strong> Login with Google</strong> 
            </a>           
        </div>
        <div>
            <label class="text-center info-text">No publicaremos nada sin tu concentimiento</label>
        </div> `;
    
    formElem.innerHTML = tempformLogin;
    const googleBtn = formElem.querySelector('#google-login');
    googleBtn.addEventListener('click', googleOnSubmit);
    const facebookBtn = formElem.querySelector('#facebook-login');
    facebookBtn.addEventListener('click', facebookOnSubmit);
    return formElem;
  };