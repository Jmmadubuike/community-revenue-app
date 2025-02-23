from models.settings import Settings
from middlewares.admin_required import admin_required
from nexios.routing import Router
from nexios.http import Request, Response
import json
admin_setting_router = Router("/api/admin/financial")
admin_setting_router.add_middleware(admin_required) 



@admin_setting_router.get("/details")
async def get_all_settings(req :Request, res :Response):
    settings = await Settings.first()
    if not settings:
        return res.json({"message":"No settings found"},status_code=404)
    return res.json(await settings.to_dict())



@admin_setting_router.put("/update")
async def update_settings(req :Request, res :Response):
    settings = await Settings.first()
    if not settings:
        settings = await Settings()
    data = await req.json
    settings.bank_name = data.get("bankName",settings.bank_name or "")
    settings.bank_account = data.get("accountName",settings.bank_account or "")
    settings.payment_description = data.get("paymentDescription",settings.payment_description or "")
    settings.important_note =json.dumps(data.get("importantNote",settings.important_note or ""))
    settings.account_number = data.get("accountNumber",settings.account_number or "")
    await settings.save()
    return res.json(await settings.to_dict())