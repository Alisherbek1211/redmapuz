from django.db import models


CHOICES = (
    ("Hayvonlar","Hayvonlar"),
    ("O'simliklar","O'simliklar"),
)

class Oilasi(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = ("Oilasi")
        verbose_name_plural = ("Oilalari")

class Nature(models.Model):
    oilasi = models.ForeignKey(Oilasi,on_delete=models.CASCADE)
    turi = models.CharField(max_length=11,choices=CHOICES,default="Hayvonlar")
    nomi = models.CharField(max_length=255)
    muallifi = models.CharField(max_length=255)#olib tashlash kerak
    yili = models.IntegerField(default=2000)
    maqomi = models.TextField()
    tarqalishi = models.TextField()
    yashash_joylari = models.TextField()
    soni = models.TextField()
    yashash_tarzi = models.TextField()
    cheklovchi_omillar = models.TextField()
    kupaytirish = models.CharField(max_length=255)
    choralari = models.TextField()
    img = models.ImageField(upload_to="nature/",default="")

    class Meta:
        verbose_name = ("Tur")
        verbose_name_plural = ("Turlari")

    def __str__(self):
        return self.nomi

class Coordinate(models.Model):
    nomi = models.ForeignKey(Nature,on_delete=models.CASCADE)
    x = models.FloatField(default=0)
    y = models.FloatField(default=0)

    class Meta:
        verbose_name = ("Kordinata")
        verbose_name_plural = ("Kordinatalar")
        
    def __str__(self):
        return self.nomi.nomi
