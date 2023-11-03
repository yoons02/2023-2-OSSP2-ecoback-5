from django.contrib import admin
from django.urls import path, include
from .views import CustomTokenObtainPairView

app_name = "accounts"
urlpatterns = [
    path('accounts/', include('dj_rest_auth.urls')),
    path('accounts/', include('dj_rest_auth.registration.urls')),
    path('accounts/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
