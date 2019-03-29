import { userState } from '../controller/login.js';


export const homeTmp = () => {
    const tmp = document.createElement('section');
    tmp.setAttribute('id', 'home')
    tmp.innerHTML = `
    <div>
        <img src="${userState().photoURL}">
    </div>
    <div>
        <h3>${userState().displayName}</h3>
        <h4 class="text-center">Instrucciones</h4>
        <p>hksajhdksajhdkjhsakjdhsakdjsjdasdsa
        sadsadsadsadsadsadsadsadsadsadsad
        sadsadsadsadkjadkjsahkdhsakdhjsad
        hdgjasgdjsagjdgsajdgjsadgjsagdjsagd
        fgfhgfhfhgfhfhfhgfhfhgfhgfhfhfhgfhgf
        gdhfhgfhgfhgfhgfhgfvnffhgfhgfhgfhfhf
        gjhgjhgjhgjhgjhgjhgjgjhgjgjhgjgjhgjhg</p>
    </div>
    
    `;
    
    return tmp;
} 