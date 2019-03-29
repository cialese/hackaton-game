import { userState } from '../controller/login.js';

export const createDoc = (uid, userName, userPhoto, points) => {
  return firebase
    .firestore()
    .collection('users')
    .add({
      uid,
      userName,
      userPhoto,
      points 
    }).catch((error) => {
      console.log(error)
    });
}

export const addDoc = (callback) => {
  return firebase
    .firestore()
    .collection('users')
    .onSnapshot(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push({ 
            id: doc.id,
            ...doc.data(), 
          });
        });
        callback(data);
      });
};

export const getUserInfo = () => {
  // event.preventDefault();
  // const statePost = document.querySelector('#state-post');
  // const textMessage = document.querySelector('#input-new-note');
  // const valueTextMessage = textMessage.value;
  let countLike = 0;
  const userUid = userState().uid
        image = userState().photoURL
        name = userState().displayName;
  // const data = {
  //     message: '',
  //     timeout: 2000,
  //     actionText: 'Undo'
  //   };
   
    createDoc(userUid, name, image, countLike)
      .then(() => {
        console.log('nota agregada');
      }).catch(() => {
        console.log('nota no agregada');
      });
};