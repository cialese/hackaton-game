import {logOutOnSubmit} from '../controller/login.js'
import{changeHash} from '../controller/login.js';
import{profileTmp}from '../ui/profile-tmp.js'
export const nav= () => {
const navElem = document.createElement('footer');
navElem.setAttribute('id','footerNav');
navElem.innerHTML =`
    <div class="text-center">
    <i id="btn-profile" class="fas fa-user navi"></i>
    <button type="button" class="btn btn-primary">Start</button>
    <i  id="btn-out" class="fas fa-sign-out-alt navi"></i>
    </div>
`; 
const btnProfile = navElem.querySelector('#btn-profile')
btnProfile.addEventListener('click',()=>{
    const root = document.getElementById('root');
    const home = document.getElementById('home');
    const footerNav = document.getElementById('footer');
    home.style.display="none";

    root.appendChild(profileTmp());
      window.location.hash = '';
      changeHash('/profile'); 
    
})
const btnLogout= navElem.querySelector('#btn-out');
btnLogout.addEventListener('click',() => {
    logOutOnSubmit();
});
return navElem;
}