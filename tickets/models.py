from django.conf import settings
from django.db import models

from django.db.models.signals import pre_save
from django.dispatch import receiver

from .utils import generate_ticket_code


class Board(models.Model):
    """ user issue board
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}"


class Ticket(models.Model):
    """ user request/issue
    """
    ISSUE = 'issue'
    ENHANCEMENT = 'enhancement'
    CREATE = 'create'
    TICKET_TYPES = (
        (ISSUE, 'Issue/Bug'),
        (ENHANCEMENT, 'Enhancement'),
        (CREATE, 'Setup a new project'),
    )

    PENDING = 'pending'
    IN_PROGRESS = 'progress'
    FOR_REVIEW = 'review'
    FOR_DEPLOYMENT = 'deployment'
    DELIVERED = 'delivered'

    TICKET_STATUSES = (
        (PENDING, 'Pending'),
        (IN_PROGRESS, 'In Progress'),
        (FOR_REVIEW, 'For Review'),
        (FOR_DEPLOYMENT, 'For Deployment'),
        (DELIVERED, 'Delivered'),
    )

    code = models.CharField(max_length=10, null=True, blank=True)
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
        related_name="user", null=True, on_delete=models.SET_NULL)
    assignee = models.ForeignKey(settings.AUTH_USER_MODEL,
        related_name="assignee", null=True, on_delete=models.SET_NULL)

    board = models.ForeignKey('Board', null=True, on_delete=models.SET_NULL)
    project = models.ForeignKey('projects.Project', null=True, on_delete=models.SET_NULL)

    content = models.TextField()
    ticket_type = models.CharField(max_length=50, choices=TICKET_TYPES, default=ISSUE)

    is_develop = models.BooleanField(default=False)
    is_design = models.BooleanField(default=False)

    project_creation = models.BooleanField(default=False)
    status = models.CharField(max_length=50, choices=TICKET_STATUSES, default=PENDING)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_delivered = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.code}"

@receiver(pre_save, sender=Ticket)
def assign_project_code(instance=None, **kwargs):
    if not instance.code:
        instance.code = generate_ticket_code()

