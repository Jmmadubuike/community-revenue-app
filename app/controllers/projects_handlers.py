from nexios.http import Request, Response
from nexios.routing import Router
from models.projects import Project
from schemas.project_schemas import ProjectSchema
from nexios.validator import ValidationError
from middlewares.admin_required import admin_required

projects_router = Router("/api/admin/projects")
projects_router.add_middleware(admin_required)
@projects_router.post("")
async def create_project(req: Request, res: Response):
    request_body = await req.json
    schema = ProjectSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    project = await Project.create(**validated_data)
    return res.json({"project": project, "status": "success"}, status_code=201)

@projects_router.get("/all")
async def list_projects(req: Request, res: Response):
    projects = await Project.all().values()
    return res.json({"data": projects, "status": "success"})

@projects_router.get("/{project_id}")
async def get_project(req: Request, res: Response):
    project_id = req.path_params["project_id"]
    project = await Project.get_or_none(id=project_id)
    if not project:
        return res.status(404).json({"error": "Project not found"})
    return res.json({"data": project.to_dict(), "status": "success"})

@projects_router.put("/{project_id}/update")
async def update_project(req: Request, res: Response):
    project_id = req.path_params["project_id"]
    request_body = await req.json
    schema = ProjectSchema()

    try:
        validated_data = schema.load(request_body)
    except ValidationError as err:
        return res.json(err.messages, status_code=422)

    project = await Project.get_or_none(id=project_id)
    if not project:
        return res.status(404).json({"error": "Project not found"})

    await project.update_from_dict(validated_data)
    await project.save()
    return res.json({"project": project, "status": "success"})

@projects_router.delete("/{project_id}/delete")
async def delete_project(req: Request, res: Response):
    project_id = req.path_params["project_id"]
    project = await Project.get_or_none(id=project_id)
    if not project:
        return res.status(404).json({"error": "Project not found"})

    await project.delete()
    return res.json({"status": "success"})