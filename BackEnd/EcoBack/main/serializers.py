from rest_framework import serializers
from .models import *

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
    
    image = serializers.ImageField(use_url=True)
    read_only_fields = ['id', 'created_at', 'point']

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
    image = serializers.ImageField(use_url=True)

class BarcodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Barcode
        fields = '__all__'

    image = serializers.ImageField(use_url=True, required=True)

class BadgeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Badge
        fields = '__all__'

    image = serializers.ImageField(use_url=True, required=True)

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

    brand_image = serializers.ImageField(use_url=True, required=True)

class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductCategory
        fields = '__all__'

    image = serializers.ImageField(use_url=True, required=True)


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

    product_code = serializers.ImageField(use_url=True, required=True)
    product_image = serializers.ImageField(use_url=True, required=True)
 