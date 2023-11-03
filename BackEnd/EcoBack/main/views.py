from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

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
        if new_barcodes.is_valid(raise_exception = True):
            new_barcodes.save()
            return Response(data=new_barcodes.data)