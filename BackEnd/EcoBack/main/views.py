from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, Event
from .serializers import UserSerializer, EventSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def user_create(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        new_user = UserSerializer(data=request.data)
        if new_user.is_valid(raise_exception=True):
            new_user.save()
            return Response(data=new_user.data)
        
@api_view(['GET', 'POST'])
def event_create(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        new_event = EventSerializer(data=request.data)
        if new_event.is_valid(raise_exception = True):
            new_event.save()
            return Response(data=new_event.data)