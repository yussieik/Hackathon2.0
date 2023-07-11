# Generated by Django 4.2.3 on 2023-07-11 07:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Constellation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('features', models.JSONField()),
                ('type', models.CharField(choices=[('North', 'North'), ('South', 'South')], max_length=5)),
                ('image', models.ImageField(upload_to='constellation_images')),
                ('is_zodiac', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserConstellation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('constellation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='constellations.constellation')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='constellations.userprofile')),
            ],
        ),
    ]
