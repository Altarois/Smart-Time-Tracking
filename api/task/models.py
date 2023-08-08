from django.db import models
from django.utils import timezone
from django.conf import settings


class BaseModel(models.Model):
    created_at = models.DateTimeField(db_index=True, default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Task(BaseModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    time = models.PositiveIntegerField(help_text="Duration in either minutes or hours.")
    comment = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f" task {self.user} N°{self.id}"