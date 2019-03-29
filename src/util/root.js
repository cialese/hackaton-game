import {signInForm} from '../ui/login-tmp.js';
import { userState } from '../controller/login.js';
import { profileTmp } from '../ui/profile-tmp.js';
import { homeTmp } from '../ui/home-tmp.js';
import {nav} from '../controller/nav.js';

const changeTmp = (hash) => {
    if (userState() === null) {
      if ((hash === '#/signin')) {
        return viewTmp('#/signin');
      }
    } else {
      if (hash === '#/' || hash === '' || hash === '#') {
        window.location.hash = '';
        return viewTmp('#/home');
      } else if (hash === '#/home' || hash === '#/profile') {
        return viewTmp(hash);
      }
    }
  };
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const main = document.getElementById('main');
    const root = document.getElementById('root');
    const footerNav=document.getElementById('footer');
    // const navBar = document.getElementById('nav');
    // const backgroundBody = document.getElementById('background-body');
    root.innerHTML = '';
    // navBar.innerHTML = '';
    main.innerHTML = '';
    footerNav.innerHTML='';
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
    case 'profile':
      root.appendChild((profileTmp()));
      footerNav.appendChild(nav());
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