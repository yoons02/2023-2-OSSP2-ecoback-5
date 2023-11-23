from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.generics import RetrieveAPIView, RetrieveUpdateAPIView, ListAPIView, CreateAPIView
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .models import *
from .serializers import *
import cv2
import numpy as np
from pyzbar.pyzbar import decode
import time
from PIL import Image
import io

used_codes = []

class MyProfileView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)


class ProfileUpdateView(RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)


class EventListView(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class BarcodeCreateView(CreateAPIView):
    serializer_class = BarcodeSerializer

    def create(self, request, *args, **kwargs):
        valid_string = '29'
        new_barcodes = BarcodeSerializer(data=request.data)
        if new_barcodes.is_valid(raise_exception=True):
            barcode_image = new_barcodes.validated_data.get('image')
            nparr = np.fromstring(barcode_image.read(), np.uint8)
            frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

            for code in decode(frame):
                barcode_data = code.data.decode('utf-8')
                if valid_string not in barcode_data:
                    return JsonResponse({'status': 'Invalid', 'code': barcode_data})
                if barcode_data not in used_codes:
                    used_codes.append(barcode_data)
                    new_barcodes.save()
                    return JsonResponse({'status': 'approved', 'code': barcode_data})
                else:
                    return JsonResponse({'status': 'duplicate', 'code': barcode_data})
            return JsonResponse({'status': 'not found'})


class BarcodeCountView(ListAPIView):
    queryset = Barcode.objects.all()

    def list(self, request, *args, **kwargs):
        count = self.get_queryset().count()
        return JsonResponse({'count': count})


class CategoryReadView(ListAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class BrandReadView(ListAPIView):
    serializer_class = BrandSerializer

    def get_queryset(self):
        return Brand.objects.filter(category=self.kwargs['id'])


class ProductsReadView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(brand=self.kwargs['id'])


class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class BadgeShowView(RetrieveAPIView):
    serializer_class = BadgeSerializer

    def get_object(self):
        user = get_object_or_404(Profile, user=self.kwargs['id'])
        return Badge.objects.get(user=user)