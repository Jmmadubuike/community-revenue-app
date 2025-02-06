from nexios.http import Request, Response
from nexios.routing import Router
from models.users import Users
from models.payments import Payment
from middlewares.admin_required import admin_required
from services.user_services import generate_user_password, send_user_email
from nexios.hooks import after_request
admin_payment_router = Router("/api/admin/payments")
admin_payment_router.add_middleware(admin_required) 

@admin_payment_router.get("")
async def get_all_payments(req :Request, res :Response):
    limit = req.query_params.get("limit",15)
    offset = req.query_params.get("offset",0)
    
    base_query :Payment = await Payment.query.all_data()
    print(base_query)
    list_of_payments = []
    for pays in base_query:
        list_of_payments.append(await pays.to_dict())
        
    return res.json(list_of_payments)
    

