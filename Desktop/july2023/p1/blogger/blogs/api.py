from blogs.models import *
from rest_framework import viewsets,permissions
from .serializer import *


# Blog Viewset

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = BlogSerializer