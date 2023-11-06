from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
import cv2
import numpy as np
from pyzbar.pyzbar import decode
import time

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
    if request.method == 'POST':
        new_barcodes = BarcodeSerializer(data=request.data)
        
        if new_barcodes.is_valid(raise_exception=True):
            # 이미지 필드를 가져온 후 저장
            barcode_image = new_barcodes.validated_data.get('image')
            
            # pts = np.array([barcode_image.polygon], np.int32)
            # pts = pts.reshape(-1, 1, 2)
            # cv2.polylines(frame, [pts], True, green_color, 5)
            input_string = barcode_image.data.decode('utf-8')
            target_string = "10"
            
            if target_string in input_string:  # 텀블러를 사용했다는 심볼을 확인
                if input_string not in used_codes:  # 기존 바코드 넘버가 없음을 확인
                    print('Approved.')
                    print(input_string)
                    used_codes.append(input_string)
                    # time.sleep(5)
                    new_barcodes.save()
                    # return Response(data=new_barcodes.data)
                    return Response(data="바코드 확인이 완료되었습니다.")
                else:
                    return Response(data="중복된 바코드입니다.")
            elif target_string not in input_string:
                return Response(data="잘못된 바코드입니다.")
            else:
                return Response(data="바코드를 인식할 수 없습니다.")

@api_view(['GET'])
def category_read(request):
    if request.method == 'GET':
        catecories = ProductCategory.objects.all()
        serializers = ProductCategorySerializer(catecories)
        return Response(data = serializers.data)