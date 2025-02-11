from nexios.http import Request, Response
from nexios.routing import Router
from models.users import Users
from schemas.user_schemas import UserSchema, UserUpdateSchema
from nexios.validator import ValidationError
from middlewares.admin_required import admin_required
from services.user_services import generate_user_password, send_user_email
from nexios.hooks import after_request
users_router = Router("/api/admin/users")
users_router.add_middleware(admin_required)

@users_router.post("")
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
    user = await Users.create(**validated_data,password=password,is_activate = True)
    if user:
        req.state.email = user.email
        req.state.password = password
    return res.json({"user": user, "status": "success"}, status_code=201)

@users_router.get("/all")
async def list_users(req: Request, res: Response):
    users = await Users.all().values()
    return res.json({"data": users, "status": "success"})

@users_router.get("/{user_id}")
async def get_user(req: Request, res: Response):
    user_id = req.path_params["user_id"]
    user = await Users.get_or_none(id=user_id)
    if not user:
        return res.status(404).json({"error": "User not found"})
    return res.json({"data": user.to_dict(), "status": "success"})

@users_router.put("/{user_id}/update")
async def update_user(req: Request, res: Response):
    user_id = req.path_params["user_id"]
    request_body = await req.json
    schema = UserUpdateSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    user = await Users.get_or_none(id=user_id)
    if not user:
        return res.status(404).json({"error": "User not found"})

    await user.update_from_dict(validated_data)
    await user.save()
    return res.json({"user": user, "status": "success"})

@users_router.delete("/{user_id}/delete")
async def delete_user(req: Request, res: Response):
    user_id = req.path_params["user_id"]
    user = await Users.get_or_none(id=user_id)
    if not user:
        return res.status(404).json({"error": "User not found"})

    await user.delete()
    return res.json({"status": "success"})