from django.contrib import admin
from .models import Design, Category


@admin.register(Design)
class DesignAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass