from rest_framework import serializers
from .models import Board, Ticket

from projects.serializers import ProjectSerializer
from users.serializers import UserSerializer


class BaseTicketSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True,)
    code = serializers.ReadOnlyField()

    class Meta:
        model = Ticket
        fields = (
            'code',
            'user',
            'assignee',
            'board',
            'project',
            'content',
            'ticket_type',
            'is_develop',
            'is_design',
            'project_creation',
            'status',
            'date_created',
            'date_delivered',)

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        return super(BaseTicketSerializer, self).__init__(*args, **kwargs)

    def create(self, data):
        return self.Meta.model.objects.create(
            user=self.user,
            **data,
        )
    
    def update(self, instance, data):
        return super(BaseTicketSerializer, self).update(instance, data)

class TicketSerializer(BaseTicketSerializer):
    assignee = serializers.SlugRelatedField(many=False, read_only=True, slug_field='first_name')
    project = serializers.SlugRelatedField(many=False, read_only=True, slug_field='name',)

    class Meta:
        model = Ticket
        fields = (
            'code',
            'assignee',
            'content',
            'project',
            'status',)


class BoardSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True,)
    tickets = TicketSerializer(read_only=True, source='ticket_set', many=True)
    class Meta:
        model = Board
        fields = ('user', 'tickets')
