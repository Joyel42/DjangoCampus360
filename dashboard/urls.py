from django.contrib import admin  
from django.urls import path  
from dashboard import views  
from django.http import HttpResponse

urlpatterns = [  
    path('',views.home),
    path('home',views.home, name="home"),
    path('login',views.login, name="login"),
    path('daily-report',views.daily_report , name="daily-report")
    ]

