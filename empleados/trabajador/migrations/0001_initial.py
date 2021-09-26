# Generated by Django 3.2.7 on 2021-09-26 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_usuario', models.CharField(max_length=100, verbose_name='Nombre')),
                ('cedula_usuario', models.IntegerField(max_length=10, unique=True, verbose_name='Cédula')),
                ('telefono_usuario', models.IntegerField(max_length=10, verbose_name='Teléfono')),
                ('email_usuario', models.EmailField(max_length=100, verbose_name='E-mail')),
                ('creacion_usuario', models.DateField(auto_now_add=True, verbose_name='Fecha de creación')),
            ],
            options={
                'verbose_name': 'trabajador',
                'verbose_name_plural': 'trabajadores',
            },
        ),
    ]