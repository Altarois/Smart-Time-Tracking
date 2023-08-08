from django.urls import path
from .views import TaskListView, CreateTaskView

urlpatterns = [
    path('tasks/', TaskListView.as_view(), name='tasks'),
    path('add-task/', CreateTaskView.as_view(), name='add-task'),
]
