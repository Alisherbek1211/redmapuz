from django.shortcuts import render
from .models import Nature , Coordinate , REGIONS as viloyatlar

from sentence_transformers import SentenceTransformer, util
from PIL import Image
import glob
import os
from DeepImageSearch import LoadData
print('Loading CLIP Model...')
model = SentenceTransformer('clip-ViT-B-32')


def nature(request):
    data = Nature.objects.all()
    return render(request,'index.html',{'data':data})

regions = {
    "Xorazm" : {"x":41.55333524728877,"y":60.63171458968133},
    "Andijan": {"x":40.77398304415682,"y":72.3435943043043},
    "Surxondaryo" : {"x":37.229946780719374,"y":67.28245085330633},
    "Buxoro"  : {"x":39.767552900235394,"y":64.4231326},
    "Toshkent" : {"x":41.312336300425486,"y":69.2787079},
    "Navoiy": {"x":40.10345820028124,"y":65.37342209999998},
    "Fargona":{"x":40.37708320031709,"y":71.7918491},
    "Nukus" : {"x":42.46002290051553,"y":59.6176603},
    "Jizzax" : {"x":40.12416731068046 ,"y":67.8400189951009},
    "Qarshi" : {"x":38.8399800001027 ,"y":65.79279479999998},
    "Namangan" : {"x":40.99964820039211,"y":71.6726238},
    "Samarkand": {"x":39.65500170021967,"y":66.9756953999999},
    "Sirdaryo" : {"x":40.84361 ,"y":68.66167},
}

def regionListView(request):
    objectList = None
    reg = request.GET.get("region","")
    tur = request.GET.get("tur","")
    if reg != "":
        objectList = Coordinate.objects.filter(region = reg)
        reg = regions.get(reg)
    else:
        objectList = Coordinate.objects.all()
    if tur in ("Hayvonlar","O'simliklar"):
        objectList.filter(nomi__turi = tur)
    return render(request,"xarita/maps.html",{"objectList":objectList,"coord":reg,"viloyatlar":viloyatlar})

def searchImage(request):
    pass

def searchName(request):
    pass

    