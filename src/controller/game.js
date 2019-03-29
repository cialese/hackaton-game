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
  let countLike = 0;
  const userUid = userState().uid;
  const image = userState().photoURL;
  const name = userState().displayName;
    createDoc(userUid, name, image, countLike)
      .then((response) => {
        console.log(response);
      }).catch(() => {
        console.log('puntaje no agregada');
      });
};
