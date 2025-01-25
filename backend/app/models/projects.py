from tortoise import fields, models
from .base import BaseModel

class Project(BaseModel):
    name = fields.CharField(max_length=255)
    description = fields.TextField()
    start_date = fields.DateField()
    end_date = fields.DateField(null=True)
    status = fields.CharField(max_length=50)
    media_urls = fields.JSONField(default=[])

    class Meta:
        table = "projects"

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "status": self.status,
            "media_urls": self.media_urls,
        }