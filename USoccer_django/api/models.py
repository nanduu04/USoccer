from django.db import models

# Create your models here.
class Event(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    eventTime = models.DateField()
    eventType = models.CharField(max_length=50)
    eventNote = models.CharField(max_length=150)

