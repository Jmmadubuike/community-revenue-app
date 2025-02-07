from nexios.http import Request, Response
from nexios.routing import Router
from models.events import Event
from schemas.eventSchema import EventSchema, EventSchema as EventUpdateSchema
from nexios.validator import ValidationError
from middlewares.admin_required import admin_required

# filepath: /c:/Users/dunamix/Documents/community-revenue-app/app/controllers/admin_event.py

events_router = Router("/api/admin/events")
events_router.add_middleware(admin_required)

@events_router.post("")
async def create_event(req: Request, res: Response):
    request_body = await req.json()
    schema = EventSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    event = await Event.create(**validated_data)
    return res.json({"event": await event.to_dict(), "status": "success"}, status_code=201)

@events_router.get("/all")
async def list_events(req: Request, res: Response):
    events = await Event.all().values()
    return res.json({"data": events, "status": "success"})

@events_router.get("/{event_id}")
async def get_event(req: Request, res: Response):
    event_id = req.path_params.event_id
    event = await Event.get_or_none(id=event_id)
    if not event:
        return res.status(404).json({"error": "Event not found"})
    return res.json({"data": await event.to_dict(), "status": "success"})

@events_router.put("/{event_id}/update")
async def update_event(req: Request, res: Response):
    event_id = req.path_params.event_id
    request_body = await req.json()
    schema = EventUpdateSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    event = await Event.get_or_none(id=event_id)
    if not event:
        return res.status(404).json({"error": "Event not found"})

    await event.update_from_dict(validated_data)
    await event.save()
    return res.json({"event": await event.to_dict(), "status": "success"})

@events_router.delete("/{event_id}/delete")
async def delete_event(req: Request, res: Response):
    event_id = req.path_params.event_id
    event = await Event.get_or_none(id=event_id)
    if not event:
        return res.status(404).json({"error": "Event not found"})

    await event.delete()
    return res.json({"status": "success"})