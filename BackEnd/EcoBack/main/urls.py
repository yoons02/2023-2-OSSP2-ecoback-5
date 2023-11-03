from django.urls import path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "main"
urlpatterns = [
    path('mypage', views.my_profile),
    path('mypage-update', views.profile_update),
    path('events', views.event_all),
    path('events/<int:id>', views.event_detail),
    path('barcodes', views.barcode_create),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)