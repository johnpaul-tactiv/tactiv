from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from .serializers import TicketSerializer, BaseTicketSerializer, BoardSerializer

class Tickets(ViewSet):
    """Ticket list endpoint"""
    serializer_class = BaseTicketSerializer

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.filter(
                user=request.user
            ),
            many=True
        )
        return Response(serializer.data, status=200)
    
    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            get_object_or_404(
                self.serializer_class.Meta.model,
                user=request.user,
                **kwargs
            )
        )
        return Response(serializer.data, status=200)

    def create(self, request, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            user=request.user
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

    def update(self, request, *args, **kwargs):
    
        serializer = self.serializer_class(
            data=request.data,
            user=request.user,
            instance = get_object_or_404(
                self.serializer_class.Meta.model,
                **kwargs
            )
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)


class Boards(ViewSet):
    """Boards list endpoint"""
    serializer_class = BoardSerializer

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.filter(
                user=request.user
            ),
            many=True
        )
        return Response(serializer.data, status=200)


        