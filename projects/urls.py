from django.urls import path, re_path
from .views import Projects, Project

urlpatterns = [
    path('', Projects.as_view({
        'get': 'get'
    }), name="projects"),

    path('<str:code>/', Project.as_view({
        'get': 'get'
    }), name="project"),
]