from django.db import models
from django.views.generic import TemplateView
# Create your models here.


class Material(models.Model):
	name = models.CharField(max_length=200)
	price = models.IntegerField() 
	description = models.CharField(max_length=2000)

	def __str__(self):
		return self.name



