import uuid
from django.db import models
from django.contrib.auth.models import User

# users links
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

# profile image
class ProfileImage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    author_username = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='profile_picture/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username}'s Profile Image"
    
    def save(self, *args, **kwargs):
        if not self.author_username:
            self.author_username = self.author.username
        super().save(*args, **kwargs)