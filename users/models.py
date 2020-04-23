from django.db import models
import datetime

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from rest_framework.authtoken.models import Token

from tickets.models import Board
from utils.annoying import get_object_or_none

from .managers import UserManager
from .utils import user_media_path


class User(AbstractBaseUser, PermissionsMixin):
    """ user info
    """
    email = models.EmailField(max_length=500, unique=True)
    first_name = models.CharField(max_length=80, null=True, blank=True)
    last_name = models.CharField(max_length=80, null=True, blank=True)
    image = models.ImageField(upload_to=user_media_path, null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("first_name", "last_name")

    @property
    def board(self):
        return get_object_or_none(Board, user=self)

    def __str__(self):
        return f"{self.email}"

    def get_token(self):
        """ get or generate a user token that is valid for
            `settings.AUTH_TOKEN_EXPIRY_TIME`
        """
        token, created = Token.objects.get_or_create(user=self)
        expiry_date = token.created + datetime.timedelta(days=settings.AUTH_TOKEN_EXPIRY_TIME)

        if not created and expiry_date < timezone.now():
            # delete token
            token.delete()
            # generate a new one
            token = Token.objects.create(user=self)

        return token

    def create_board(self):
        """ create a board for each user
        """
        return Board.objects.create(user=self)


@receiver(post_save, sender=User)
def create_auth_token(instance=None, created=False, **kwargs):
    """ generate a user token for new user.
    """
    if created:
        # generate token
        instance.get_token()
        instance.create_board()