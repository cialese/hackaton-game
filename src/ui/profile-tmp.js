import { userState } from '../controller/login.js';


export const profileTmp = () => {
    const tmp = document.createElement('section');
    tmp.setAttribute('id', 'profile')
    tmp.innerHTML = `
    <div class="center-photo">
        <img src="${userState().photoURL} alt="imagen de usuario">
    </div>
    <div>
    </div>
    <div>
        <h3>${userState().displayName}</h3>
        <p>dsfdsfdsfdsfdfsdfdsfdsfdsfdsfdsfsadsad
        sadsadsadasdsadsadsadsadsadsadsadsadsadsad
        asdsadasdsadsadsadsadsadsadsadsadsadsadsad
        sadasdsadhgsajdhgjsagdjgdsajhsagdjdsadasdd
        ashdgsajhgdjsagdjsagdjdsgsajdhgsajhdgsajdgs
        hsadgjgdhsagdjhgsajdhgsajdhgsajdhgsajdgjahs
        ashdghsagdjhsagdjhgsadjhsagjdhgsadjhgsadjhds
        sadhksajhdksahjsahdsadsadsadsahdgsas
        sadsadsadsadsdsadsadsad</p>
    </div>
    `;
    return tmp;
} 