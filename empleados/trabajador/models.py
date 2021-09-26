from django.db import models


# Create your models here.
class Trabajador(models.Model):
    nombre_usuario = models.CharField(max_length=100, verbose_name="Nombre")
    cedula_usuario = models.IntegerField(unique=True, verbose_name="Cédula")
    telefono_usuario = models.IntegerField(verbose_name="Teléfono")
    email_usuario = models.EmailField(max_length=100,verbose_name="E-mail")
    creacion_usuario = models.DateField(auto_now_add=True, verbose_name="Fecha de creación")

    class Meta:
        verbose_name = "trabajador"
        verbose_name_plural = "trabajadores"

    def __str__(self):
        return self.nombre_usuario
