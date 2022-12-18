from django.urls import path
from .views import nature
urlpatterns = [
    path('',nature)
]