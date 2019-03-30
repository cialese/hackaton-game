import {signInForm} from '../ui/login-tmp.js';
import { userState } from '../controller/login.js';
// import { profileTmp } from '../ui/profile-tmp.js';
import { homeTmp } from '../ui/home-tmp.js';
import { nav } from '../ui/nav.js';
import { instructionsTmp } from '../ui/instructions-tmp.js';
// import { gameTmp, game1Tmp } from '../ui/game-tmp.js';


const changeTmp = (hash) => {
  if (userState() === null) {
    if ((hash === '#/signin')) {
      return viewTmp('#/signin');
    }
  } else {
    if (hash === '#/' || hash === '' || hash === '#') {
      window.location.hash = '';
      return viewTmp('#/home');
    } else if (hash === '#/home' || hash === '#/profile' || hash === '#/instructions' || hash === '#/game') {
      return viewTmp(hash);
    }
  }
};
  
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const main = document.getElementById('main');
  const root = document.getElementById('root');
  const contentQuestion =document.getElementById('content-question')
  const footerNav = document.getElementById('footer');
  
  root.innerHTML = '';
  main.innerHTML = '';
  footerNav.innerHTML = '';
  switch (router) {
  case 'home':
    
    root.appendChild(homeTmp());
    footerNav.appendChild(nav());

    // navBar.appendChild(logOut());
    // main.appendChild(textarePublication());
    // getAllPost(notes => {
    //   root.innerHTML = '';
    //   const uid = isUserSignedIn();
    //   root.appendChild(postListSection(notes, uid));
    //   backgroundBody.style.background = 'white';
    // });
    break;
  case 'signin':
    root.appendChild(signInForm());
    break;
  // case 'profile':
  //   root.appendChild((profileTmp()));
  //   footerNav.appendChild(nav());
  //   break;
  case 'game':
    contentQuestion.style.display='block';
  
    break;
  case 'instructions':
    root.appendChild(instructionsTmp());
    footerNav.appendChild(nav());
    contentQuestion.style.display='none';
    break;
    // case 'privatePost':
    //   privatePost(notes => {
    //     root.innerHTML = '';
    //     root.appendChild(postListSection(notes, isUserSignedIn()));
    //   }, isUserSignedIn(), 'privado');
    //   navBar.appendChild(logOut());
    //   main.appendChild(textarePublication());
    //   root.appendChild(postListSectionnn());
    //   break;
    // case 'publicPost':
    //   privatePost(notes => {
    //     root.innerHTML = '';
    //     root.appendChild(postListSection(notes, isUserSignedIn()));
    //   }, isUserSignedIn(), 'publico');
    //   navBar.appendChild(logOut());
    //   main.appendChild(textarePublication());
    //   root.appendChild(postListSectionnn());
  default:
    root.appendChild(signInForm());
    break;
  }
};
  
export const initRoutersSocialMedia = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};