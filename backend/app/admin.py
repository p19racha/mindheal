from firebase_admin import firestore

db = firestore.client()

def get_all_alerts():
    alerts_ref = db.collection('alerts').order_by('flagged_at', direction=firestore.Query.DESCENDING)
    docs = alerts_ref.stream()
    alerts = []
    for doc in docs:
        alerts.append(doc.to_dict())
    return alerts

def get_user_profile(user_id: str):
    user_ref = db.collection('users').document(user_id)
    doc = user_ref.get()
    if doc.exists:
        return doc.to_dict()
    else:
        return {}

def get_user_sessions(user_id: str):
    sessions_ref = db.collection('chats').document(user_id).collection('sessions')
    docs = sessions_ref.stream()
    sessions = []
    for doc in docs:
        session_data = doc.to_dict()
        session_data['session_id'] = doc.id
        sessions.append(session_data)
    return sessions
