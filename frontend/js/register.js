const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await db.collection('users').doc(user.uid).set({
      name: name,
      email: email,
      phone: phone,
      createdAt: new Date()
    });

    alert("Registration successful!");
    window.location.href = "login.html";
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
