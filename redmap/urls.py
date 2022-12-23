from django.urls import path
from .views import index ,map , regionListView,hayvonview,osimlikview,searchName
urlpatterns = [
    path('',index),
    # path('map/',map),
    path('region/',regionListView),
    path('hayvon/<int:id>/',hayvonview),
    path('osimlik/<int:id>/',osimlikview),
    path('search/<str:search>/',searchName),
]