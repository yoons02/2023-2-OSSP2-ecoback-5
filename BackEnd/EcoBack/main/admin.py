from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Profile)
admin.site.register(Event)
admin.site.register(Barcode)
admin.site.register(Badge)
admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(Brand)