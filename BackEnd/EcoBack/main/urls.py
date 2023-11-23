from django.urls import path
from .views import MyProfileView, ProfileUpdateView, EventListView, EventDetailView, BarcodeCreateView, BarcodeCountView, CategoryReadView, BrandReadView, ProductsReadView, ProductDetailView, BadgeShowView
from django.conf import settings
from django.conf.urls.static import static

app_name = "main"
urlpatterns = [
    path('mypage/', MyProfileView.as_view(), name='my_profile'),
    path('mypage-update/', ProfileUpdateView.as_view(), name='profile_update'),
    path('events/', EventListView.as_view(), name='event_all'),
    path('events/<int:pk>/', EventDetailView.as_view(), name='event_detail'),
    path('barcodes/', BarcodeCreateView.as_view(), name='barcode_create'),
    path('barcodes-count/', BarcodeCountView.as_view(), name='barcode_count'),
    path('user/<int:pk>/badges/', BadgeShowView.as_view(), name='badge_show'),
    path('market/categories/', CategoryReadView.as_view(), name='category_read'),
    path('market/categories/<int:id>/', BrandReadView.as_view(), name='brand_read'),
    path('market/brands/<int:id>/', ProductsReadView.as_view(), name='products_read'),
    path('market/products/<int:pk>/', ProductDetailView.as_view(), name='product_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
