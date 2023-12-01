from django.db import models
from django.contrib.auth.models import User

# Create your models here.
def image_upload_path(instance, filename):
    return f'{instance.pk}/{filename}'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    point = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to=image_upload_path, null=True, default='')

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    writer = models.CharField(max_length=50)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to=image_upload_path, null=False)

class Barcode(models.Model):
    id = models.AutoField(primary_key=True)
    writer = models.ForeignKey(User, null=True, blank=False, on_delete=models.SET_NULL) # User 모델 사라져도 바코드는 남음, User와 1:N 관계
    create_at = models.DateTimeField(auto_now_add=True)
    barcode_number = models.TextField(null=False, default='')

class Badge(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE) # User 모델 사라지면, Badge도 사라짐
    name = models.CharField(max_length=10)
    image = models.ImageField(upload_to=image_upload_path, default='')

class ProductCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to=image_upload_path, null=False)

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(ProductCategory, null=True, blank=False, on_delete=models.CASCADE)
    brand_name = models.CharField(max_length=30)
    brand_image = models.ImageField(upload_to=image_upload_path, null=False)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(ProductCategory, null=True, blank=False, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, null=True, blank=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    product_code = models.ImageField(upload_to=image_upload_path, default='')
    product_image = models.ImageField(upload_to=image_upload_path, null=False)

class MyProduct(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    product_code = models.ImageField(upload_to=image_upload_path, default='')
    product_image = models.ImageField(upload_to=image_upload_path, null=False)