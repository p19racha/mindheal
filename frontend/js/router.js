const appDiv = document.getElementById('app');

firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    renderLogin();
  } else {
    const profile = await db.collection('users').doc(user.uid).get();
    if (!profile.exists || !profile.data().personality) {
      renderQuestionnaire();
    } else {
      renderChat();
    }
  }
});
