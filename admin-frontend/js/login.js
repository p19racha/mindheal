function adminLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin123") {
    // No localStorage
    window.location.href = "dashboard.html?auth=admin";
  } else {
    alert("Invalid credentials!");
  }
}
