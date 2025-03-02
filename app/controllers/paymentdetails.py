from models.settings import Settings
from middlewares.admin_required import admin_required
from nexios.routing import Router
from nexios.http import Request, Response
paymentdetails_routers = Router("/api/financial")



@paymentdetails_routers.get("/details")
async def get_all_settings(req :Request, res :Response):
    settings = await Settings.first()
    if not settings:
        return res.json({"message":"No settings found"},status_code=404)
    return res.json(await settings.to_dict())



