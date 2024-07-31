from django.urls import path
from .views import views

urlpatterns = [
    path("create_user_profile/", views, name="create_user_profile"),
]
