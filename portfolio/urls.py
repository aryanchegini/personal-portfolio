from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='portfolio-home'),
    path('about/', views.about, name='portfolio-about'),
    path('projects/', views.projects, name='portfolio-projects'),
]