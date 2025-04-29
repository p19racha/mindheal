# 🧠 MindHeal - Mental Health Chatbot (WIP)

MindHeal is an experimental mental health support chatbot project.  
It combines AI intelligence (LLaMA models) with user personality profiling to create compassionate, context-aware conversations.

⚡ Built with FastAPI, Firebase, and JavaScript frontend.  
🛠 Powered locally by Ollama running LLaMA 2 or LLaMA 3 models.

---

## 📋 Features

- 🔐 User Registration & Login (via Firebase)
- 🧠 Personalized AI Conversations (based on onboarding questionnaire)
- 📝 Full Chat History Saving (Firestore Database)
- 🗂️ Session Continuity (Chats tied to user ID)
- 🚨 Planned: Emergency Detection & Alerts (Coming Soon)
- 🧑‍💻 Admin Dashboard (WIP)

---

## ⚙️ Tech Stack

| Layer | Technology |
|:------|:-----------|
| Backend | Python, FastAPI, Firebase Admin SDK |
| AI Model | Ollama (LLaMA 2, LLaMA 3) |
| Frontend | HTML, CSS, JavaScript |
| Database | Firestore |
| Authentication | Firebase Auth |

---

## 🚀 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/p19racha/mindheal.git
cd mindheal/backend
```

### 2. Python Environment Setup

```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create `.env` file

In the `backend/` folder, create a `.env`:

```env
LLAMA_API_URL=http://127.0.0.1:11434/api/generate
FIREBASE_KEY_PATH=backend/firebase-adminsdk.json
```

**Important:**  
⚠️ Do not expose your `.env` file or Firebase credentials publicly!

---

### 5. Setup Firebase Admin Credentials

- Download your Firebase Admin SDK private key.
- Place it inside `backend/`.
- Path must match `FIREBASE_KEY_PATH` value.

---

### 6. Run the Backend

```bash
uvicorn main:app --reload
```

Backend server will be available at:  
`http://127.0.0.1:8000`

---

### 7. Frontend Setup

- Open `frontend/chat.html` in your browser.
- Start chatting with the AI bot!

---

## 📈 Future Roadmap

- 🛠 Admin Dashboard to monitor users and chats
- 📞 Integrate real-time emergency alerting system
- 📱 Mobile responsive frontend redesign
- 🗂️ Cloud Deployment (Render / Railway / AWS)
- 🔒 Enhanced security and OAuth login
- 🎨 Personality-matched reply generation

---

## ⚠️ Important Disclaimer

> **This project is currently under active development and is NOT production-ready.**  
> MindHeal is not intended for real-world mental health crisis intervention at this time.  
> Please do not rely on this chatbot for emergencies or clinical diagnosis.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

We welcome contributions!  

- Fork the repo
- Create your feature branch: `git checkout -b feature/awesome-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin feature/awesome-feature`
- Open a Pull Request

---

## 🌟 Support

If you like this project, consider starring ⭐ the repository on GitHub!

---

# Thank you for checking out MindHeal! ❤️
```
