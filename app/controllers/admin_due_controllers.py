from nexios.http import Request, Response
from nexios.routing import Router
from models.dues import Due
from schemas.due_schemas import DueSchema,DueSchema as DueUpdateSchema
from nexios.validator import ValidationError
from middlewares.admin_required import admin_required

dues_router = Router("/api/admin/dues")
dues_router.add_middleware(admin_required)

@dues_router.post("")
async def create_due(req: Request, res: Response):
    request_body = await req.json
    print("Request body s",request_body)
    schema = DueSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    due = await Due.create(**validated_data)
    return res.json({"due": await due.to_dict(), "status": "success"}, status_code=201)

@dues_router.get("/all")
async def list_dues(req: Request, res: Response):
    dues = await Due.all().order_by("-created_at").values()
    return res.json({"data": dues, "status": "success"})

@dues_router.get("/{due_id}")
async def get_due(req: Request, res: Response):
    due_id = req.path_params.due_id
    due = await Due.get_or_none(id=due_id)
    if not due:
        return res.status(404).json({"error": "Due not found"})
    return res.json({"data": await due.to_dict(), "status": "success"})

@dues_router.put("/{due_id}/update")
async def update_due(req: Request, res: Response):
    due_id = req.path_params.due_id
    request_body = await req.json
    schema = DueUpdateSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    due = await Due.get_or_none(id=due_id)
    if not due:
        return res.status(404).json({"error": "Due not found"})

    await due.update_from_dict(validated_data)
    await due.save()
    return res.json({"due": await due.to_dict(), "status": "success"})

@dues_router.delete("/{due_id}/delete")
async def delete_due(req: Request, res: Response):
    due_id = req.path_params["due_id"]
    due = await Due.get_or_none(id=due_id)
    if not due:
        return res.status(404).json({"error": "Due not found"})

    await due.delete()
    return res.json({"status": "success"})