from django.urls import path
from .views import index ,map
urlpatterns = [
    path('',index),
    path('map/',map),
]