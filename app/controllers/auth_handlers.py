from nexios.http import Request,Response
from nexios.routing import Router
from schemas.auth_schema import AdminLoginSchema,UserLoginSchema
from nexios.validator import ValidationError
from services.auth import authenticate_admin,authenticate_user
from models.admins import Admins
from models.users import Users
from datetime import datetime,timedelta
from services.auth import create_jwt_token
auth_router = Router("/api/auth")


@auth_router.post("/admin-login")
async def handler_admin_login(req :Request,res :Response):
    request_body = await req.json
    print(req.method)
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
    return res.json({"token":token,"status":"success","username":admin_user.name})
    


@auth_router.post("/user-login")
async def handle_user_login(req :Request,res :Response):
    request_data = await req.json
    auth_schema = UserLoginSchema()
    try:
        validated_data = auth_schema.load(request_data)

    except ValidationError as err:
        return res.json(err.messages,status_code=422)
    
    user = await authenticate_user(**validated_data)
    if not user:
        return res.json({"Auth":"Invalid credentials"},status_code=400)
    
    auth_payload = {
        "id" : str(user.id),
        "exp" : datetime.utcnow() + timedelta(days=30),
        "email" : user.email

    }
    token = create_jwt_token(auth_payload)
    return res.json({"token":token,"status":"success","username":user.username})






@auth_router.post("/user-login/idn")
async def handle_user_login(req :Request,res :Response):
    data = await req.json
    user = await Users.get_or_none(idn = data.get("idn", None))
    if not user:
        return res.json({"auth":"failed"}, status_code=400)
    auth_payload = {
        "id" : str(user.id),
        "exp" : datetime.utcnow() + timedelta(days=30),
        "email" : user.email

    }
    token = create_jwt_token(auth_payload)
    return res.json({"token":token,"status":"success","username":user.username})

