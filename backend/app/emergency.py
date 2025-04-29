from app.auth import db

critical_keywords = ["suicidal", "end my life", "can't go on", "give up", "depressed", "hopeless"]

def check_critical_and_flag(user_id, message):
    for word in critical_keywords:
        if word in message.lower():
            db.collection('critical_users').document(user_id).set({
                user_id: {
                    "critical": True,
                    "last_message": message
                }
            })
            return True
    return False
