# Generated by Django 4.2 on 2023-04-22 21:55

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('linkapp', '0011_rename_user_profileimage_author_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileimage',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
