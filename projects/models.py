from django.conf import settings
from django.db import models

from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from tickets.models import Ticket

from .utils import generate_project_code


class Project(models.Model):
    """ project detail
    """
    code = models.CharField(max_length=15, null=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=250)
    desc = models.TextField(null=True, blank=True)

    domain = models.URLField(null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

    def request_creation_ticket(self):
        """ create a ticket
        """
        return Ticket.objects.create(
            user=self.user,
            board=self.user.board,
            project=self,
            ticket_type=Ticket.CREATE,
            content="Create the project based on the specification",
            is_develop=True,
            is_design=True,
            project_creation=True,
        )


@receiver(pre_save, sender=Project)
def assign_project_code(instance=None, **kwargs):
    if not instance.code:
        instance.code = generate_project_code()


@receiver(post_save, sender=Project)
def create_ticket(instance=None, created=False, **kwargs):
    if created:
        # if the project is newly created,
        # automatically create a ticket
        instance.request_creation_ticket()