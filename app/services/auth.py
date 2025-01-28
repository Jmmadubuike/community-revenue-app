import bcrypt,jwt
from models.admins import Admins
from nexios.config import get_config
from nexios.auth.backends.jwt import create_jwt,decode_jwt
from nexios.auth.base import BaseUser
from models.users import Users

class User(BaseUser):
    def __init__(self,id = None, display_name = None,user_obj = None,admin = None):
        self.id = id
        self.display_name  = display_name
        self.user_obj = user_obj
        self.admin = admin
        super().__init__()

    def is_authenticated(self):
        return True
    def is_active(self):
        return True
    def display_name(self):
        return self.display_name
    def get_id(self):
        return self.id
    def obj(self):
        return self.user_obj
    def is_admin(self):
        return self.admin
    
async def find_admin_by_email(email):
    return await Admins.query.filter_qs().get_or_none(email = email)


def generate_password_hash(plain_text_password):
    return bcrypt.hashpw(plain_text_password.encode('utf-8'), bcrypt.gensalt())

def check_password(plain_text_password, hashed_password):
    return bcrypt.checkpw(plain_text_password.encode('utf-8'), hashed_password.encode('utf-8'))


async def authenticate_admin(email,password):
    admin_user :Admins = await find_admin_by_email(email)
    if not  admin_user:
        return None
    if check_password(password,admin_user.password):
        return admin_user
    return None
    
async def authenticate_user(email,password):
    user :Users = await Users.get_or_none(email = email)
    if not user:
        return None
    
    if password != user.password:
        return None
    
    return user
def create_jwt_token(payload):
    app_config = get_config()
    token = create_jwt(payload,secret=app_config.secret_key)
    return token

def decode_jwt_token(token):
    app_config = get_config()
    return jwt.decode(token,key=app_config.secret_key,algorithms=['HS256'])