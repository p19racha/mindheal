document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const db = firebase.firestore();
      const userDoc = await db.collection('users').doc(user.uid).get();

      const userData = userDoc.exists ? userDoc.data() : {};

      app.innerHTML = `
        <h2>Welcome, ${user.email}!</h2>
        <p><strong>User ID:</strong> ${user.uid}</p>
        <h3>Your Profile Info:</h3>
        <pre>${JSON.stringify(userData, null, 2)}</pre>

        <button id="logoutBtn">Logout</button>
      `;

      document.getElementById('logoutBtn').addEventListener('click', async () => {
        await firebase.auth().signOut();
        window.location.href = "login.html";
      });

    } else {
      alert("Session expired. Please login again.");
      window.location.href = "login.html";
    }
  });
});
