from django.db import models

class Resident(models.Model):
    GENDER_CHOICES = [
        ('M', 'Мужской'),
        ('F', 'Женский'),
    ]

    STATUS_CHOICES = [
        ('active', 'Активен'),
        ('departed', 'Выехал'),
        ('pending_bsn', 'Ожидает BSN'),
        ('moved', 'Перемещён'),
    ]

    # Основные данные
    full_name_cyrillic = models.CharField(max_length=255, verbose_name="ФИО (кириллица)")
    full_name_latin = models.CharField(max_length=255, verbose_name="ФИО (латиница)", blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, verbose_name="Пол")
    birth_date = models.DateField(verbose_name="Дата рождения")

    # Документы
    bsn = models.CharField(max_length=50, verbose_name="BSN", blank=True, null=True)
    passport_number = models.CharField(max_length=50, verbose_name="Номер паспорта", blank=True, null=True)
    v_number = models.CharField(max_length=50, verbose_name="V-nummer", blank=True, null=True)

    # Статус
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending_bsn', verbose_name="Статус")

    # Контакты
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    # Семейная группа
    family_group = models.CharField(max_length=50, blank=True, null=True, verbose_name="Семейная группа")

    # Примечания
    notes = models.TextField(blank=True, null=True, verbose_name="Примечания")

    # Технические поля
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name_cyrillic

    class Meta:
        verbose_name = "Жилец"
        verbose_name_plural = "Жильцы"
        ordering = ['full_name_cyrillic']