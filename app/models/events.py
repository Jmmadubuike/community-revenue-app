from .base import BaseModel as Model,fields



class Event(Model):

    title = fields.CharField(max_length = 120)
    venue = fields.TextField()
    description =  fields.TextField()
    banner_url = fields.TextField(null = True
                                  )
    date = fields.DatetimeField(null = True)
    
    async def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "venue": self.venue,
            "description": self.description,
            "banner_url": self.banner_url,
            "date": self.date
        }