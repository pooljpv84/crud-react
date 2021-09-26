from .models import Trabajador
from rest_framework import viewsets, permissions
from .serializers import TrabajadorSerializer


# view sets crud sin especificar metodos

class TrabajadorViewSet(viewsets.ModelViewSet):
    queryset = Trabajador.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrabajadorSerializer
