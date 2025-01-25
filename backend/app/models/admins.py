from .base import BaseModel,fields,BaseUserModel
import enum
class AdminRoleEnum(enum.Enum):
    admin = "admin"
    superadmin = "superadmin"
    

class Admins(BaseModel,BaseUserModel):
    name = fields.CharField(max_length=255)
    email = fields.CharField(max_length=255,unique=True)
    password = fields.CharField(max_length=255)
    role = fields.CharEnumField(AdminRoleEnum, default=AdminRoleEnum.admin)

    class Meta:
        table = "admins"


    def is_admin(self):
        return True 
    