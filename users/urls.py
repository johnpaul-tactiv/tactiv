from django.urls import path, re_path
from .views import Login, AuthUser, Avatar


urlpatterns = [
    path('auth/', AuthUser.as_view({
        'get': 'get',
        'post': 'post'
    }), name="auth_user"),
    path('auth/login/', Login.as_view(), name="login"),
    path('auth/upload/', Avatar.as_view({
        'post': 'post'
    }), name="avatar"),
]
