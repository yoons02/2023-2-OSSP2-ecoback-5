from django.urls import path
from .views import *
from . import views

app_name = "main"
urlpatterns = [
    path('users', views.user_create),
    path('events', views.event_create),
]