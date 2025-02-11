from nexios.http import Request, Response
from nexios.routing import Router
from models.users import Users
from schemas.user_schemas import UserSchema
from nexios.validator import ValidationError
from middlewares.admin_required import admin_required
from services.user_services import generate_user_password, send_user_email
from nexios.hooks import after_request
users_router = Router("/api/users")

@users_router.post("/new")
@after_request(send_user_email)
async def create_user(req: Request, res: Response):
    request_body = await req.json
    schema = UserSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)
    check_user = await Users.query.filter_qs(email=validated_data["email"]).exists()
    if check_user:
        return res.status(400).json({"error": "User with this email already exists"})
    password = generate_user_password()
    user = await Users.create(**validated_data,password=password)
    if user:
        req.state.email = user.email
        req.state.password = password
    return res.json({"user": user, "status": "success"}, status_code=201)