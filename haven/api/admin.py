from django.contrib import admin
from .models import Resident

@admin.register(Resident)
class ResidentAdmin(admin.ModelAdmin):
    list_display = ('full_name_cyrillic', 'status', 'gender', 'birth_date', 'family_group')
    list_filter = ('status', 'gender', 'family_group')
    search_fields = ('full_name_cyrillic', 'full_name_latin', 'bsn', 'passport_number', 'v_number')
    fieldsets = (
        ('Основная информация', {
            'fields': ('full_name_cyrillic', 'full_name_latin', 'gender', 'birth_date')
        }),
        ('Документы и статус', {
            'fields': ('status', 'bsn', 'passport_number', 'v_number')
        }),
        ('Контакты и семья', {
            'fields': ('email', 'phone_number', 'family_group')
        }),
        ('Дополнительно', {
            'fields': ('notes',),
            'classes': ('collapse',)
        }),
    )