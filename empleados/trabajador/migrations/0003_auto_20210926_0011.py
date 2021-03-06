# Generated by Django 3.2.7 on 2021-09-26 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trabajador', '0002_auto_20210926_0003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trabajador',
            name='cedula_usuario',
            field=models.IntegerField(unique=True, verbose_name='Cédula'),
        ),
        migrations.AlterField(
            model_name='trabajador',
            name='email_usuario',
            field=models.EmailField(max_length=100, verbose_name='E-mail'),
        ),
    ]
