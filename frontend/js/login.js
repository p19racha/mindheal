const auth = firebase.auth();  // Getting Firebase Authentication

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();  // 🛑 SUPER important to prevent page reload

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      alert("Login successful!");

      // ✅ Redirect after login
      window.location.href = "dashboard.html";  // or "chat.html" if already filled

    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message);
    }
  });
});
