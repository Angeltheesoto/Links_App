# Generated by Django 4.2 on 2023-04-17 02:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('linkapp', '0005_post_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='profile_option',
            new_name='brand',
        ),
    ]