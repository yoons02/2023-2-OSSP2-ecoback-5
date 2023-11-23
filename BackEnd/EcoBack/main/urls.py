from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from .views import MyProfileViewSet, EventViewSet, BarcodeViewSet, ProductCategoryViewSet, BrandViewSet, ProductViewSet, BadgeViewSet

app_name = "main"

router = DefaultRouter()
router.register(r'mypage', MyProfileViewSet, basename='mypage')
router.register(r'events', EventViewSet, basename='events')
router.register(r'barcodes', BarcodeViewSet, basename='barcodes')
router.register(r'market/categories', ProductCategoryViewSet, basename='categories')
router.register(r'market/brands', BrandViewSet, basename='brands')
router.register(r'market/products', ProductViewSet, basename='products')
router.register(r'badges', BadgeViewSet, basename='badges')

urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)