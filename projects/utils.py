from django.contrib.auth import get_user_model

def generate_project_code():
    """ generate a random unique
        project ID
    """
    return get_user_model().objects.make_random_password(length=15)