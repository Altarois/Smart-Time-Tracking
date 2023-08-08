# serializers.py
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['user', 'time', 'comment']

        extra_kwargs = {'user': {'required': False}}
