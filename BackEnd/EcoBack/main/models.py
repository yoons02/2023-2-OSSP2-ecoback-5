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
    image = models.ImageField(upload_to=image_upload_path, default='')

class Barcode(models.Model):
    id = models.AutoField(primary_key=True)
    writer = models.ForeignKey(User, null=True, blank=False, on_delete=models.SET_NULL) # User 모델 사라져도 바코드는 남음, User와 1:N 관계
    create_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=image_upload_path, default='')