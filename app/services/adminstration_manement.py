from models import Admins
from .auth import generate_password_hash
async def get_admins():
    return Admins.query.all().values("name")

async def get_admin_by_id(admin_id):
    return Admins.query.filter_by(id=admin_id).first().values("name")

async def create_admin(email, password, name):
    password = generate_password_hash(password)
    new_admin = await Admins.create(email=email, password=password.decode("utf-8"), name=name)
    
    return new_admin