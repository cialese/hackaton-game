export const changeHash = hash => location.hash = hash;

export const googleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

export const facebookAuth = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

export const logOut = () =>  firebase.auth().signOut();


export const googleOnSubmit = () => {
  googleAuth()
    .then(result => {
      console.log('google logueado');
    }).catch(error => {
      console.log(error);
    });
};

export const facebookOnSubmit = () => {
  facebookAuth()
    .then(() => {
      window.location.hash = '';
      changeHash('/home'); 
      console.log('facebook logueado');
    }).catch(error => {
      console.log(error.code);
    });
};

export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      changeHash('/signin'); 
    }).catch(error => console.log(error.code));
};

export const getProfilePicUrl = () => firebase.auth().currentUser.photoURL;
export const getUserName = () => firebase.auth().currentUser.displayName;


// export const isUserSignedIn = () => 
//   userState() && firebase.auth().currentUser.uid;

export const userState = () => firebase.auth().currentUser;

export const authStateObserver = (user) => {
  if (user && user.emailVerified) { 
    changeHash('/home');
  } else {
    logOut();
    changeHash('#/signin');
  }
};

export const initFirebaseAuth = () => firebase.auth().onAuthStateChanged(authStateObserver);

