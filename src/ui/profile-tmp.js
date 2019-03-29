import { userState } from '../controller/login.js';


export const profileTmp = () => {
    const tmp = document.createElement('section');
    tmp.setAttribute('id', 'profile')
    tmp.innerHTML = `
    <div>
        <img src="${userState().photoURL} ">
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