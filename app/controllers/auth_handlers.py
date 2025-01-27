from nexios.http import Request,Response
from nexios.routing import Router
from schemas.auth_schema import AdminLoginSchema
from nexios.validator import ValidationError
from services.auth import authenticate_admin
from models.admins import Admins
from datetime import datetime,timedelta
from services.auth import create_jwt_token
auth_router = Router("/api/auth")


@auth_router.post("/admin-login")
async def handler_admin_login(req :Request,res :Response):
    request_body = await req.json
    print(request_body)
    schema = AdminLoginSchema()

    try:
        validated_data = schema.load(request_body)

    except ValidationError as err:
        return res.json(err.messages,status_code=422)
    
    admin_user :Admins = await authenticate_admin(validated_data['email'],
                              validated_data['password'])
    
    if not admin_user:
        return res.status(401).json({"auth":"Authentication error"})
    
    auth_payload = {
        "id" : str(admin_user.id),
        "exp" : datetime.utcnow() + timedelta(days=30),
        "email" : admin_user.email

    }
    token = create_jwt_token(auth_payload)
    return res.json({"token":token,"status":"success"})
    


