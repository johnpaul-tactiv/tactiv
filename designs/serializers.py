from django.conf import settings
from rest_framework import serializers

from .models import Design, Category


class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = (
            'id',
            'name',
            'code',
            'qr',
            'category',            
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id',
            'name'
        )