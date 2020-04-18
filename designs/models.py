from django.db import models
from django.conf import settings

from .utils import design_qr_path


class Design(models.Model):
    """ custom design
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=500, null=True, blank=True)
    code = models.CharField(max_length=14, null=True, blank=True)
    qr = models.ImageField(upload_to=design_qr_path, null=True, blank=True)

    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.id}"


class Category(models.Model):
    """ category
    """
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"