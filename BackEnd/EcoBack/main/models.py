from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=True, null=True)

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    writer = models.CharField(max_length=50)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def image_upload_path(instance, filename):
    return f'{instance.pk}/{filename}'

class Barcode(models.Model):
    id = models.AutoField(primary_key=True)
    create_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=image_upload_path, default='')