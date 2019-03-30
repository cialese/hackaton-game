import { userState } from '../controller/login.js';

export const createDoc = (uid, userName, userPhoto, scores) => {
  return firebase
    .firestore()
    .collection('users')
    .add({
      uid,
      userName,
      userPhoto,
      score: scores
    }).catch((error) => {
      console.log(error);
    });
};

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
  let score = 0;
  const userUid = userState().uid;
  const image = userState().photoURL;
  const name = userState().displayName;
  createDoc(userUid, name, image, score)
    .then((response) => {
      console.log(response);
    }).catch(() => {
      console.log('puntaje no agregada');
    });
};

export const updateScore = (id, scores) => {
  let refDoc = firebase.firestore().collection('users').doc(id);
  return refDoc.update({
    score: scores
  }); 
};

export const getScore = (doc, score) => updateScore(doc.id, score);
