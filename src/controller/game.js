export const add = (textNewNote, userUid, getUserName, getProfilePicUrl, type, like) =>
  firebase
    .firestore()
    .collection('post')
    .add({
      name: getUserName,
      title: textNewNote,
      profilePicUrl: getProfilePicUrl,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      state: type,
      likes: like,
      uid: userUid
    }).catch((error) => {
    });