import os
import requests
import json
from dotenv import load_dotenv
from app.auth import db

load_dotenv()

LLAMA_API_URL = os.getenv("LLAMA_API_URL")
MODEL_NAME = "llama2"

def get_last_chats(user_id: str, limit: int = 10):
    chats_ref = db.collection('users').document(user_id).collection('chats').order_by('timestamp').limit_to_last(limit)
    chats = []
    for doc in chats_ref.get():
        chats.append(doc.to_dict())
    return chats

def build_prompt(history, user_message, user_profile):
    prompt = (
        f"You are a compassionate AI mental health assistant. give short and human like answers.\n"
        f"The user enjoys {user_profile.get('favorite_movie', 'movies')} and struggles with {user_profile.get('stress_trigger', 'stress')}.\n\n"
    )

    for chat in history:
        if chat["sender"] == "user":
            prompt += f"User: {chat['message']}\n"
        elif chat["sender"] == "bot":
            prompt += f"Assistant: {chat['message']}\n"

    prompt += f"User: {user_message}\nAssistant:"
    return prompt

def chat_with_bot(user_message: str, user_profile: dict, user_id: str) -> str:
    try:
        history = get_last_chats(user_id)
        prompt = build_prompt(history, user_message, user_profile)

        payload = {
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": True
        }

        headers = {"Content-Type": "application/json"}

        print("[Sending Payload]:", json.dumps(payload, indent=2))  # Add this
        response = requests.post(LLAMA_API_URL, headers=headers, json=payload, stream=True)
        response.raise_for_status()

        full_reply = ""

        for line in response.iter_lines():
            if line:
                decoded_line = json.loads(line.decode('utf-8'))
                if decoded_line.get('done', False):
                    break
                if 'response' in decoded_line:
                    full_reply += decoded_line['response']

        print("[Final Reply From LLaMA]:", full_reply)  # Add this

        return full_reply.strip()

    except Exception as e:
        import traceback
        print("[LLaMA API Error]:", str(e))
        traceback.print_exc()  # Add this for full error trace
        return "Sorry, something went wrong while processing your request."
