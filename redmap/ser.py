from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *



class Hayvonserial(ModelSerializer):
    class Meta:
        model = Hayvon
        fields = "__all__"
        
        
        
class Hayvonser(ModelSerializer):
    nomi = Hayvonserial()
    class Meta:
        model = CoordinateHayvon
        
        fields = "__all__"
        


    