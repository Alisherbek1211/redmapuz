from django.shortcuts import render
from .models import Nature

def nature(request):
    data = Nature.objects.all()
    return render(request,'index.html',{'data':data})