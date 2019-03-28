import { initRoutersSocialMedia } from './util/root.js';
import { initFirebaseAuth } from './controller/login.js';
 
  const init = () => {
  const config = {
    apiKey: "AIzaSyCyLgSSDGE8vkZEkGGSHKwDn6Ggz9vP_zQ",
    authDomain: "hackaton-dc13d.firebaseapp.com",
    databaseURL: "https://hackaton-dc13d.firebaseio.com",
    projectId: "hackaton-dc13d",
    storageBucket: "hackaton-dc13d.appspot.com",
    messagingSenderId: "409264061671"
  };
  firebase.initializeApp(config);
  initRoutersSocialMedia();
  initFirebaseAuth();
}
window.onload = init;