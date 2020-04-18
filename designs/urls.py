from django.urls import path, re_path
from .views import Designs, Categories


urlpatterns = [
    path('', Designs.as_view({
        'get': 'get',
        'post': 'post',
    }), name="designs"),

    path('categories/', Categories.as_view({
        'get': 'get'
    }), name="categories"),
]
