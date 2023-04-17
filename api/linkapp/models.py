import uuid
from django.db import models
from django.contrib.auth.models import User

class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()

class Work(models.Model):
    company = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()

class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()

class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    author_username = models.CharField(max_length=255, blank=True)
    title = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    brand = models.CharField(max_length=255, blank=True)
    url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.author_username:
            self.author_username = self.author.username
        super().save(*args, **kwargs)
