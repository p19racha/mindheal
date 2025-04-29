import time
from app.auth import db

def save_message(user_id: str, sender: str, message: str):
    timestamp = int(time.time() * 1000)
    chat_data = {
        "sender": sender,
        "message": message,
        "timestamp": timestamp
    }
    db.collection('users').document(user_id).collection('chats').add(chat_data)

def get_personality(user_id: str):
    # Dummy profile if not found
    return {
        "favorite_movie": "Inception",
        "stress_trigger": "workload"
    }
