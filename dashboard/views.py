from django.shortcuts import render, redirect  
from django.contrib import messages
from django.conf import settings
from django.shortcuts import redirect
from django.template import RequestContext
from django.http import HttpResponse
 
def home(request):
    return render(request,'index.html')


def login(request):
    return render(request,'login.html')

def daily_report(request):
    return render(request,'daily_report.html')

