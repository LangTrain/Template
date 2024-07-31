from django.http import JsonResponse
from firebase_admin import firestore
from .firebase import db


def create_user_profile(request):
    user_id = request.POST.get("user_id")
    email = request.POST.get("email")

    # Add data to Firestore
    doc_ref = db.collection("users").document(user_id)
    doc_ref.set({"email": email})

    return JsonResponse({"status": "success", "message": "User profile created"})
