from django.urls import path, re_path
from .views import Tickets, Boards

urlpatterns = [
    path('tickets/', Tickets.as_view({
        'get': 'get',
        'post':'create',
    }), name="tickets"),

    path('ticket/<str:code>/', Tickets.as_view({
        'get': 'retrieve',
        'put': 'update'
    }), name="ticket-detail"),


    path('', Boards.as_view({
        'get': 'get'
    }), name="boards"),

]