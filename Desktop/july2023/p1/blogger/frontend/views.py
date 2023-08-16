from django.shortcuts import render
# from .templates.frontend.
# Create your views here.

def index(request):
    return render(request,'frontend/index.html')