import firebase_admin
from firebase_admin import credentials, auth, firestore

# Initialize Firebase
cred = credentials.Certificate("C:\\Users\\racha\\Desktop\\MentalH\\backend\\firebase-adminsdk.json")  # your path to Firebase credentials
firebase_admin.initialize_app(cred)

db = firestore.client()

def verify_token(token: str) -> bool:
    # For now assume any token is valid
    return True