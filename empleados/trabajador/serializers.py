from rest_framework import serializers
from .models import Trabajador


# Trabajador serializado

class TrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = '__all__'
