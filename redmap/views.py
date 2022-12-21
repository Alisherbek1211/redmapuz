from django.shortcuts import render
from .models import Nature

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
    "Farg'ona":{"x":40.37708320031709,"y":71.7918491},
    "Nukus" : {"x":42.46002290051553,"y":59.6176603},
    "Jizzax" : {"x":40.12416731068046 ,"y":67.8400189951009},
    "Qarshi" : {"x":38.8399800001027 ,"y":65.79279479999998},
    "Namangan" : {"x":40.99964820039211,"y":71.6726238},
    "Samarkand": {"x":39.65500170021967,"y":66.9756953999999},
    "Toshkent Sh":{"x":41.311081, "y":69.240562},
    "Sirdaryo" : {"x":40.84361 ,"y":68.66167},
}


import urllib.request
from .models import Nature

import requests
from bs4 import BeautifulSoup as bs
from .models import Oilasi

# oila = Oilasi.objects.first()

def index():
    oila = Oilasi.objects.first()
    for i in range(255, 500):
        res = requests.get(
            f"http://redbook.uz/en/site/animal-view?id={str(i)}")
        soup = bs(res.text, "html.parser")

        images = list(soup.find_all("img", {"class": "img-responsive"}))
        cnt = soup.find_all("p", {"class": "text-justify"})
        if len(cnt) < 7:
            continue
        nomi = soup.find("h3",{"class":"text-center text-uppercase"}).text
        urllib.request.urlretrieve("http://redbook.uz/"+images[0], str(i))
        maqom = cnt[0].text
        tarqalishi = cnt[1].text
        joylari = cnt[2].text
        soni = cnt[3].text
        tarzi = cnt[4].text
        omillar = cnt[5].text
        kopayish = cnt[6].text
        choralari = cnt[7].text
        # print(oila)
        Nature.objects.create(
            oilasi = oila,
            turi = "Hayvonlar",
            maqomi=maqom,
            nomi = nomi,
            tarqalishi=tarqalishi,
            yashash_joylari=joylari,
            soni=soni,
            yashash_tarzi=tarzi,
            cheklovchi_omillar=omillar,
            kupaytirish=kopayish,
            choralari=choralari,
        )
    return 0