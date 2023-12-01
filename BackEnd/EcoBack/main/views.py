from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework.generics import RetrieveAPIView, RetrieveUpdateAPIView, ListAPIView, CreateAPIView
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from .models import *
from .serializers import *
import cv2
import numpy as np
from pyzbar.pyzbar import decode
import time
from PIL import Image
import io
from rest_framework.routers import DefaultRouter, Route, DynamicRoute
from dateutil.relativedelta import relativedelta


class MyProfileViewSet(viewsets.GenericViewSet, RetrieveAPIView, RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser])
    def add_event(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['patch'], detail=True, permission_classes=[IsAdminUser])
    def admin_update_event(self, request, pk=None):
        event = self.get_object()
        serializer = self.get_serializer(event, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BarcodeViewSet(viewsets.GenericViewSet, CreateAPIView, ListAPIView):
    queryset = Barcode.objects.all()
    serializer_class = BarcodeSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        valid_string = '29'
        barcode_image = request.data.get('image')
        nparr = np.fromstring(barcode_image.read(), np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        for code in decode(frame):
            barcode_data = code.data.decode('utf-8')
            if valid_string not in barcode_data:
                return JsonResponse({'status': 'Invalid', 'code': barcode_data})

            if not Barcode.objects.filter(barcode_number=barcode_data).exists():
                request_data = {
                    'writer': request.user.id,  # 현재 사용자 ID
                    'barcode_number': barcode_data,  # 추출한 바코드 데이터
                    'other_field': request.data.get('other_field')  # 다른 필요한 필드들
                }

                new_barcodes = BarcodeSerializer(data=request_data)
                if new_barcodes.is_valid(raise_exception=True):
                    new_barcodes.save()  # Barcode 객체 저장

                    user = request.user
                    profile = user.profile
                    profile.point += 150
                    profile.save()

                    return JsonResponse({'status': 'approved', 'code': barcode_data})
            else:
                return JsonResponse({'status': 'duplicate', 'code': barcode_data})

        return JsonResponse({'status': 'not found'})
        


    @action(methods=['get'], detail=False)
    def count(self, request):
        count = self.get_queryset().count()
        return JsonResponse({'count': count})
    
    @action(methods=['get'], detail=False)
    def last_barcode(self, request):
        user = request.user
        try:
            last_barcode = Barcode.objects.filter(writer=user).latest('create_at')
            # 3개월을 추가합니다
            date_with_three_months = last_barcode.create_at + relativedelta(months=3)
            return JsonResponse({'extinction period': date_with_three_months})
        except Barcode.DoesNotExist:
            return JsonResponse({'extinction period': 'None'})




class ProductCategoryViewSet(viewsets.GenericViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def brands(self, request, pk=None):
        category = self.get_object()
        brands = Brand.objects.filter(category=category)
        serializer = BrandSerializer(brands, many=True)
        return Response(serializer.data)

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser])
    def add_category(self, request):
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['patch'], detail=True, permission_classes=[IsAdminUser])
    def admin_update_category(self, request, pk=None):
        category = self.get_object()
        serializer = self.get_serializer(category, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BrandViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        brand = self.get_object()
        products = Product.objects.filter(brand=brand)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser])
    def add_brand(self, request):
        serializer = BrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['patch'], detail=True, permission_classes=[IsAdminUser])
    def admin_update_brand(self, request, pk=None):
        brand = self.get_object()
        serializer = self.get_serializer(brand, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Optionally restricts the returned products to a given brand,
        by filtering against a 'brand' query parameter in the URL.
        """
        queryset = super().get_queryset()
        brand_id = self.request.query_params.get('brand')
        if brand_id is not None:
            queryset = queryset.filter(brand=brand_id)
        return queryset

    @action(detail=True, methods=['get'])
    def detail(self, request, *args, **kwargs):
        product = self.get_object()
        serializer = self.get_serializer(product)
        return Response(serializer.data)
    
    @action(methods=['post'], detail=True, permission_classes=[IsAuthenticated])
    def purchase(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        user = request.user

        # 사용자의 포인트 확인
        if user.profile.point < product.price:
            return Response({'error': 'Insufficient points'})

        # 상품 가격만큼 포인트 차감
        user.profile.point -= product.price
        user.profile.save()

        # 추가적으로 구매 기록을 저장하거나 다른 로직을 구현할 수 있습니다.

        return Response({'message': 'Purchase successful'}, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, permission_classes=[IsAdminUser])
    def add_product(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['patch'], detail=True, permission_classes=[IsAdminUser])
    def admin_update_product(self, request, pk=None):
        product = self.get_object()
        serializer = self.get_serializer(product, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BadgeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user = get_object_or_404(Profile, user=self.kwargs['id'])
        return Badge.objects.get(user=user)