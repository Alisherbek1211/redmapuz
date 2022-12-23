from django.urls import path
from .views import index ,map , RegionApiView , regionListView
urlpatterns = [
    path('',index),
    path('map/',map),
    path('region/',regionListView),
]