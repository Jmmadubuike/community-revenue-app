from tortoise import fields, models
from .base import BaseModel
class Post(BaseModel):
    title = fields.CharField(max_length=255)
    content = fields.TextField()
    media_urls = fields.JSONField(default=[])

    class Meta:
        table = "posts"
