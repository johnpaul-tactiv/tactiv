from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from .serializers import ProjectSerializer


class Projects(ViewSet):
    """ project list endpoint
    """
    serializer_class = ProjectSerializer
    authentication_classes = (TokenAuthentication, SessionAuthentication)

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.filter(
                user=request.user
            ),
            many=True
        )
        return Response(serializer.data, status=200)

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)

        return Response(serializer.data, status=200)


class Project(ViewSet):
    """ project detail
    """
    serializer_class = ProjectSerializer

    def get(self, request, **kwargs):
        serializer = self.serializer_class(
            get_object_or_404(
                self.serializer_class.Meta.model,
                **kwargs
            )
        )
        return Response(serializer.data, status=200)

    def post(self, request, **kwargs):
        serializer = self.serializer_class(
            data=request.data,
            instance=get_object_or_404(
                self.serializer_class.Meta.model,
                **kwargs
            )
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=201)