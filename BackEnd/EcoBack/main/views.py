from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

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