from .base import BaseModel as Model,fields



class Event(Model):

    title = fields.CharField(max_length = 120)
    venue = fields.TextField()
    description =  fields.TextField()
