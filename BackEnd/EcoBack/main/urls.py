from django.urls import path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "main"
urlpatterns = [
    path('users', views.user_create),
    path('events', views.event_create),
    path('barcodes', views.barcode_create),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)