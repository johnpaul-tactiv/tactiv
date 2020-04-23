from rest_framework import serializers
from .models import Project

from users.serializers import UserSerializer


class ProjectSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    code = serializers.ReadOnlyField()

    class Meta:
        model = Project
        fields = (
            'code',
            'user',
            'name',
            'desc',
            'domain',
            'date_updated',
            'date_created',
        )