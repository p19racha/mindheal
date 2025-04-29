const firebaseConfig = {
    apiKey: "AIzaSyDeyYUr1efKwZohy37VWdnY2ID87VwEeFU",
    authDomain: "mind-heal-91359.firebaseapp.com",
    projectId: "mind-heal-91359",
    storageBucket: "mind-heal-91359.firebasestorage.app",
    messagingSenderId: "654162693298",
    appId: "1:654162693298:web:87218a9d019b2826084dab",
    measurementId: "G-V6VKCY5X8D"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Set persistence to LOCAL (stay logged in after refresh)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    console.log("Auth persistence set to LOCAL.");
  })
  .catch((error) => {
    console.error("Failed to set persistence:", error);
  });

window.auth = firebase.auth();
window.db = firebase.firestore();