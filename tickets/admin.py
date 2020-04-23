from django.contrib import admin
from .models import Board, Ticket


@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'date_created',
        'date_updated',
    )


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'user',
        'project',
        'assignee',
        'ticket_type',
        'is_develop',
        'is_design',
        'project_creation',
        'status',
        'date_created',
        'date_updated',
        'date_delivered'
    )

    search_fields = (
        'code',
        'project__name',
        'user__last_name'
    )

    list_filter = (
        'status',
        'ticket_type',
        'is_develop',
        'is_design',
    )