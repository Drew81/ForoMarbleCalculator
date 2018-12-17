from django.urls import path, re_path
from . import views
from calculations.views import home, material_create

app_name = 'calculations'

urlpatterns = [
	path('home/', views.home, name='home'),
	path('input/', views.material_create, name='input')

]