

export const signInForm = () => {
    const formElem = document.createElement('form');
    formElem.setAttribute('id', 'signin');
    const tempformLogin = `
    <div id="sign-in" class = "signin-container">
      <div class="text-first text-login">
        <h4>La primera Red Social para emprendedores peruanos</h4>
      </div>
      <div>
        <div class="col-form-login-account">
          <p class="text-login text-first-sesion">Iniciar Sesión</p>
          <button class="fb btn-social-media" id="facebook-login">
            <i class="fa fa-facebook fa-fw space-media"></i> Facebook
          </button>   
          <a href="#/google-login" class="google btn-social-media" id="google-login">
            <i class="fa fa-google fa-fw space-media"></i> Google+
          </a>
        </div>
        <div class="space-form"><span>o</span></div>
        <div class="register-inputs-field col-form-create-account">
        <input type="email" class="login-social-media" id="email-social-media" placeholder="Correo electronico" required>
        <input type="password" class="login-social-media" id="password-social-media" placeholder="Contraseña" required>
        <p id="error-message"></p>
      </div>
      <p id="error-message-login"></p>
      <button class="login-social-media btn-login" id="btn-login">Ingresa</button>
      <p>Eres nuevo en Social Media? <a href="#/signup">Registrate</a></p>
     </div>
</div>`;
    
    formElem.innerHTML = tempformLogin;
    const logInBtn = formElem.querySelector('#btn-login');
    logInBtn.addEventListener('click', logInOnSubmit);
    const googleBtn = formElem.querySelector('#google-login');
    googleBtn.addEventListener('click', googleOnSubmit);
    const facebookBtn = formElem.querySelector('#facebook-login');
    facebookBtn.addEventListener('click', facebookOnSubmit);
    return formElem;
  };