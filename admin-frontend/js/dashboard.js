const API_BASE = "http://127.0.0.1:8000";  // Backend

function getAuthParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('auth');
}

function logout() {
  window.location.href = "index.html";
}

async function loadUsers() {
  if (getAuthParam() !== "admin") {
    window.location.href = "index.html"; // Not logged in
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/users`);
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user_id => {
      const btn = document.createElement("button");
      btn.innerText = user_id;
      btn.onclick = () => loadChatHistory(user_id);
      userList.appendChild(btn);
    });

  } catch (error) {
    console.error(error);
    alert("Failed to load users.");
  }
}

async function loadChatHistory(user_id) {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = "Loading chats...";

  try {
    const response = await fetch(`${API_BASE}/admin/get_chat_history/${user_id}`);
    const chats = await response.json();

    chatBox.innerHTML = "";
    chats.forEach(chat => {
      const div = document.createElement("div");
      div.className = chat.sender === "user" ? "user-msg" : "bot-msg";
      div.innerHTML = `<strong>${chat.sender.toUpperCase()}:</strong> ${chat.message}`;
      chatBox.appendChild(div);
    });
  } catch (error) {
    console.error(error);
    alert("Failed to load chats.");
  }
}

// Load dashboard
loadUsers();
