from django.contrib import admin
from .models import Nature,Coordinate,Oilasi


class OilaAdmin(admin.ModelAdmin):
    list_display = ['name']
admin.site.register(Oilasi,OilaAdmin)

class NatureAdmin(admin.ModelAdmin):
    list_display = ['turi','nomi','muallifi','yili','soni']
admin.site.register(Nature,NatureAdmin)

class CoordinateAdmin(admin.ModelAdmin):
    list_display = ['nomi','x','y']
admin.site.register(Coordinate,CoordinateAdmin)