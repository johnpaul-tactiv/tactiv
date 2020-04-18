from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import DesignSerializer, CategorySerializer


class Designs(ViewSet):
    """ create designs
    """
    serializer_class = DesignSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)

        return Response(status=201)

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(),
            many=True
        )

        return Response(serializer.data, status=200)


class Categories(ViewSet):
    """ categories list
    """
    serializer_class = CategorySerializer

    def get(self, request):
        serializer = self.serializer_class(
            self.serializer_class.Meta.model.objects.all(),
            many=True
        )
        return Response(serializer.data, status=200)