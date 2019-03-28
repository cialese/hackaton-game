import { userState } from '../controller/login.js';


export const profileTmp = () => {
    const tmp = document.createElement('section');
    tmp.setAttribute('id', 'profile')
    tmp.innerHTML = `
    <div>
        <img src="${userState().photoURL}">
    </div>
    <div>
        <h3>${userState().displayName}</h3>
    </div>
    `;
    return tmp;
} 