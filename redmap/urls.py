from django.urls import path
from .views import index ,map , RegionApiView
urlpatterns = [
    path('',index),
    path('map/',map),
    path('region/',RegionApiView.as_view()),
]