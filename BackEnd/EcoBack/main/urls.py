from django.urls import path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = "main"
urlpatterns = [
    path('mypage/', views.my_profile),
    path('mypage-update/', views.profile_update),
    path('events/', views.event_all),
    path('events/<int:id>/', views.event_detail),
    path('barcodes/', views.barcode_create),
    path('user/<int:id>/badges/', views.badge_show),
    path('market/categories/', views.category_read),
    path('market/categories/<int:id>/', views.brand_read),
    path('market/brands/<int:id>/', views.products_read),
    path('market/products/<int:id>/', views.product_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)