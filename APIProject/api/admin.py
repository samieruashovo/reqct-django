from django.contrib import admin
from .models import Article

# Register your models here.

# 1st way
# admin.site.register(Article)
# 2nd way
@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ("title", "description")
    list_display = ("title", "description")
