from django.contrib.auth import get_user_model

def generate_ticket_code():
    """ generate a random unique
        ticket ID
    """
    return get_user_model().objects.make_random_password(length=10)