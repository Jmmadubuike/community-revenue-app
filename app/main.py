from nexios import get_application
from nexios.routing import Routes
from config import nexios_config,connect_db,close_db,ENV
from controllers import index
import asyncclick as click
from cli.create_admin import new_admin as create_admin
from controllers.auth_handlers import auth_router
from nexios.auth.middleware import AuthenticationMiddleware
from nexios.auth.backends.jwt import JWTAuthBackend
from nexios.auth.base import UnauthenticatedUser
from nexios.hooks import use_for_route
from controllers.projects_handlers import projects_router
from services.auth import User as UserKlas
from models.admins import Admins
from models.users import Users
from nexios.static import StaticFilesHandler
from controllers.admin_user_list_handlers import users_router
from controllers.media_handler import media_upload_router
from controllers.user_payment_handlers import user_payment_router
from controllers.admin_payments import admin_payment_router
from controllers.admin_due_controllers import dues_router
from controllers.user_due_controller import user_due_router
from controllers.user_creation_controllers import users_router as user_creation_router
from controllers.admin_stats_controller import stats_routes
from controllers.admin_setting import admin_setting_router
from controllers.admin_event import events_router
from controllers.paymentdetails import paymentdetails_routers
app = get_application(
    config=nexios_config
)

async def authenticator_admin(**payload):
    id = payload['id']
    admin_user = await Admins.query.filter_qs().get_or_none(id = id)
    if not admin_user:
        return  UnauthenticatedUser()
    return admin_user


async def authenticator_user(**payload):
    id = payload['id']
    admin_user = await Users.query.filter_qs().get_or_none(id = id)
    if not admin_user:
        return  UnauthenticatedUser()
    return admin_user


class ModMiddleware(AuthenticationMiddleware):


    @use_for_route("/api/user/*")
    async def __call__(self, request, response, next_middleware):
        print("For user only")
        return await super().__call__(request, response, next_middleware)
app.mount_router(auth_router)
app.mount_router(projects_router)
app.mount_router(users_router)
app.mount_router(media_upload_router)
app.mount_router(user_payment_router)
app.mount_router(admin_payment_router)
app.mount_router(dues_router)
app.mount_router(user_due_router)
app.mount_router(user_creation_router)
app.mount_router(stats_routes)
app.mount_router(admin_setting_router)
app.mount_router(events_router)
app.mount_router(paymentdetails_routers)








app.add_middleware(AuthenticationMiddleware(JWTAuthBackend(
    authenticate_func=authenticator_admin
)))


app.add_middleware(ModMiddleware(JWTAuthBackend(
    authenticate_func=authenticator_user
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
if not ENV == "prod":
    app.add_route(Routes("/media/*",StaticFilesHandler("media",url_prefix="/media/")))

""" you can add middleware
    app.add_middleware(...)
"""
print(app.routes)
@click.group()
async def cli():
    pass

cli.add_command(create_admin)

if __name__ == "__main__":
    cli()