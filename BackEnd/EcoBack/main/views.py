from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
import cv2
import numpy as np
from pyzbar.pyzbar import decode
import time
from PIL import Image
import io

used_codes = []

# Create your views here.
# 내 프로필
@api_view(['GET'])
def my_profile(request):
    user = request.user
    if request.method == 'GET':
        profile = Profile.objects.get(user = user)
        serializer = ProfileSerializer(profile)
        return Response(data=serializer.data)
        

# 프로필 수정
@api_view(['GET','PATCH'])
def profile_update(request):
    user = request.user
    if request.method == 'GET':
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(profile)
        return Response(data=serializer.data)
    elif request.method == 'PATCH':
        profile = Profile.objects.get(user=user)
        serializer = ProfileSerializer(data=request.data, instance=profile, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(data=serializer.data)


# 전체 이밴트 불러오기
@api_view(['GET'])
def event_all(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(data=serializer.data)


# 상세 이밴트 불러오기
@api_view(['GET'])
def event_detail(request, id):
    if request.method == 'GET':
        events = Event.objects.get(pk=id)
        serializer = EventSerializer(events)
        return Response(data=serializer.data)


@api_view(['POST'])
def barcode_create(request):
    valid_string = '29'
    if request.method == 'POST':
        new_barcodes = BarcodeSerializer(data=request.data)
        if new_barcodes.is_valid(raise_exception=True):
            barcode_image = new_barcodes.validated_data.get('image')

            # Convert the ImageFile to an array for pyzbar
            nparr = np.fromstring(barcode_image.read(), np.uint8)
            frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

            # Process each barcode found in the frame
            for code in decode(frame):
                barcode_data = code.data.decode('utf-8')
                if valid_string in barcode_data:
                    pass
                else:
                    return JsonResponse({'status': 'Invalid', 'code': barcode_data})
                if barcode_data not in used_codes:
                    used_codes.append(barcode_data)
                    # Save the barcode data or any other required action
                    new_barcodes.save()
                    # Return a JSON response indicating success
                    return JsonResponse({'status': 'approved', 'code': barcode_data})
                else:
                    # Return a JSON response indicating the barcode is a duplicate
                    return JsonResponse({'status': 'duplicate', 'code': barcode_data})

            # If no barcode is found, return a JSON response indicating failure
            return JsonResponse({'status': 'not found'})

@api_view(['GET'])
def barcode_count(request):
    barcode = Barcode.objects.all()
    count = len(barcode)
    return JsonResponse({'count': count})

@api_view(['GET'])
def category_read(request):
    if request.method == 'GET':
        categories = ProductCategory.objects.all()
        serializers = ProductCategorySerializer(categories, many=True)
        return Response(data = serializers.data)
    
@api_view(['GET'])
def brand_read(request, id):
    if request.method == 'GET':
        brands = Brand.objects.filter(category=id)
        serializers = BrandSerializer(brands, many=True)
        return Response(serializers.data)
    
@api_view(['GET'])
def products_read(request, id):
    if request.method == 'GET':
        products = Product.objects.filter(brand=id)
        serializers = ProductSerializer(products, many=True)
        return Response(serializers.data)
        
@api_view(['GET'])
def product_detail(request, id):
    if request.method == 'GET':
        product = get_object_or_404(Product, id=id)
        serializers = ProductSerializer(product)
        return Response(serializers.data)
    
@api_view(['GET'])
def badge_show(request, id):
    if request.method == 'GET':
        user = get_object_or_404(Profile, user=id)
        badges = Badge.objects.get(user=user)
        serializers = BadgeSerializer(badges, many=True)
        return Response(serializers.data)