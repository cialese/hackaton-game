export const googleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

export const logOut = () =>  firebase.auth().signOut();