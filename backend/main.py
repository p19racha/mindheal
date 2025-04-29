from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.chat import chat_with_bot
from app.auth import verify_token, db
from app.questionnaire import save_message, get_personality

app = FastAPI()

# Allow frontend to talk
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request structure
class ChatRequest(BaseModel):
    user_id: str
    token: str
    user_message: str

@app.get("/")
async def root():
    return {"message": "Mental Health Chatbot API Running!"}

@app.post("/chat")
async def chat(request: ChatRequest):
    if not verify_token(request.token):
        return {"error": "Invalid token"}

    profile = get_personality(request.user_id)

    # Save user message first
    save_message(request.user_id, "user", request.user_message)

    # Smart bot reply
    reply = chat_with_bot(request.user_message, profile, request.user_id)

    # Save bot reply
    save_message(request.user_id, "bot", reply)

    return {"reply": reply}
