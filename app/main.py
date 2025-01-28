from nexios import get_application
from nexios.routing import Routes
from config import nexios_config,connect_db,close_db
from controllers import index
import asyncclick as click
from cli.create_admin import new_admin as create_admin
from controllers.auth_handlers import auth_router
from nexios.auth.middleware import AuthenticationMiddleware
from nexios.auth.backends.jwt import JWTAuthBackend
from nexios.auth.base import UnauthenticatedUser
from controllers.projects_handlers import projects_router
from services.auth import User as UserKlas
from models.admins import Admins
from nexios.static import StaticFilesHandler
from controllers.admin_user_list_handlers import users_router
from controllers.media_handler import media_upload_router
app = get_application(
    config=nexios_config
)

async def authenticator_func(**payload):
    print("Hello world")
    id = payload['id']
    admin_user = await Admins.query.filter_qs().get_or_none(id = id)
    if not admin_user:
        return  UnauthenticatedUser()
    return admin_user

app.mount_router(auth_router)
app.mount_router(projects_router)
app.mount_router(users_router)
app.mount_router(media_upload_router)


app.add_middleware(AuthenticationMiddleware(JWTAuthBackend(
    authenticate_func=authenticator_func
)))
                   
@app.on_startup
async def on_startup():
    print("🚀 Nexios app started successfully!")
    await connect_db()

@app.on_shutdown
async def on_shutdown():
    print("🚀 Nexios app stopped successfully!")
    await close_db()

app.add_route(Routes("",index))
app.add_route(Routes("/media/*",StaticFilesHandler("media",url_prefix="/media/")))

""" you can add middleware
    app.add_middleware(...)
"""

@click.group()
async def cli():
    pass

cli.add_command(create_admin)

if __name__ == "__main__":
    cli()