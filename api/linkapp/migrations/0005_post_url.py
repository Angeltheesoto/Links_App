# Generated by Django 4.2 on 2023-04-17 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linkapp', '0004_post_profile_option_alter_post_content_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='url',
            field=models.URLField(blank=True),
        ),
    ]