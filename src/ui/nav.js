import { logOutOnSubmit} from '../controller/login.js';
import { changeHash} from '../controller/login.js';
import { profileTmp} from './profile-tmp.js';
import { homeTmp } from './home-tmp.js';
import { getUserInfo} from '../controller/game.js';

export const nav = () => {
  const navElem = document.createElement('footer');
  navElem.setAttribute('id', 'footerNav');
  navElem.innerHTML = `
    <div class="text-center foot-icons">
    <i id="btn-profile" class="fas fa-user "></i>
    <button id="btn-start" type="button" class="btn btn-primary circle-btn">Start</button>
    <i  id="btn-out" class="fas fa-sign-out-alt"></i>
    </div>
`; 
  const btnStart = navElem.querySelector('#btn-start');
  btnStart.addEventListener('click', () => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(homeTmp());
    window.location.hash = '';
    changeHash('/instructions');
  });
  // const btnProfile = navElem.querySelector('#btn-profile');
  // btnProfile.addEventListener('click', () => {
  //   const root = document.getElementById('root');
  //   root.innerHTML = '';
  //   root.appendChild(profileTmp());
  //   window.location.hash = '';
  //   changeHash('/instructions');
  // });
  const btnLogout = navElem.querySelector('#btn-out');
  btnLogout.addEventListener('click', () => {
    logOutOnSubmit();
  });
  return navElem;
};