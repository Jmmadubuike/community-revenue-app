from tortoise import Model,fields
import uuid
from .manager  import QueryManager
from nexios.auth.base import BaseUser
class BaseModel(Model):
    id = fields.UUIDField(pk=True, default=uuid.uuid4)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    deleted_at = fields.DatetimeField(null=True)
    deleted = fields.BooleanField(default=False)
    class Meta:
        abstract = True

    query = QueryManager()



class BaseUserModel(BaseUser):
    def is_authenticated(self):
        return True
    def is_active(self):
        return self.is_active
    
    def display_name(self):
        return 
    
    def is_admin(self):
        return 