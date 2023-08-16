# to convert diff type of data to python primitive datatypes

from rest_framework import serializers
from blogs.models import *

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'