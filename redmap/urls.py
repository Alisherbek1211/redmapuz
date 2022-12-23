from django.urls import path
from .views import index ,map , region
urlpatterns = [
    path('',index),
    path('map/',map),
    path('region/',region),
]