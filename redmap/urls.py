from django.urls import path
from .views import index ,map , regionListView,hayvonview,osimlikview,searchName
urlpatterns = [
    path('',index),
    # path('map/',map),
    path('region/',regionListView,name="region"),
    path('hayvon/<int:id>/',hayvonview,name="hayvon"),
    path('osimlik/<int:id>/',osimlikview,name="osimlik"),
    path('search/<str:search>/',searchName),
]