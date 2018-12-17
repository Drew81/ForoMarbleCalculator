from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Material
from .forms import MaterialForm
# Create your views here.
def home(request):
	template_name = 'calculations/index.html'
	material_list = Material.objects.order_by('name')
	context = {'material_list':material_list}
	return render(request, template_name, context)

def material_create(request):
	form = MaterialForm(request.POST or None)
	if form.is_valid():
		form.save()
		form = MaterialForm()
	context = {'form': form}
	return render(request, 'calculations/input.html', context)
	

