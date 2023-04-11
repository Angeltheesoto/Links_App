from django.db import models

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
    

    
