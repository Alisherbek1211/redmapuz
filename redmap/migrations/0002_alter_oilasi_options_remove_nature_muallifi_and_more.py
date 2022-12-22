# Generated by Django 4.1.4 on 2022-12-22 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('redmap', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='oilasi',
            options={'verbose_name': 'Oilasi', 'verbose_name_plural': 'Oilalari'},
        ),
        migrations.RemoveField(
            model_name='nature',
            name='muallifi',
        ),
        migrations.AddField(
            model_name='coordinate',
            name='region',
            field=models.CharField(choices=[('Xorazm', 'Xorazm'), ('Andijan', 'Andijon'), ('Surxondaryo', 'Surxondaryo'), ('Buxoro', 'Buxoro'), ('Toshkent', 'Toshkent'), ('Navoiy', 'Navoiy'), ('Fargona', 'Fargona'), ('Nukus', 'Nukus'), ('Jizzax', 'Jizzax'), ('Qarshi', 'Qarshi'), ('Namangan', 'Namangan'), ('Samarkand', 'Samarkand'), ('Sirdaryo', 'Sirdaryo')], default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='nature',
            name='img',
            field=models.ImageField(default='', upload_to='nature/'),
        ),
    ]