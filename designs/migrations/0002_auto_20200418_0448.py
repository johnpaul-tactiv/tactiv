# Generated by Django 3.0.5 on 2020-04-18 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('designs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='design',
            name='code',
            field=models.CharField(blank=True, max_length=14, null=True),
        ),
    ]
