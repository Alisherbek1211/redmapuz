from django.urls import path
from .views import nature , regionListView
urlpatterns = [
    path('',nature),
    path("regions/",regionListView,name ="region"),
]