from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'

class BarcodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Barcode
        fields = '__all__'

    image = serializers.ImageField(use_url=True, required=True)