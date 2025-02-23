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
    limit = int(req.query_params.get("limit",15))
    offset = int(req.query_params.get("offset",0))
    year,month = req.query_params.get("year"),req.query_params.get("month")
    base_query :Payment =  Payment.query
    if year:
        base_query = base_query.filter(created_at__year = int(year))
        
    if month:
        base_query = base_query.filter(created_at__month = int(month))
    list_of_payments = []
    for pays in  await base_query.all_data(limit = limit,offset = offset):
        list_of_payments.append(await pays.to_dict())
        
    return res.json(list_of_payments)
    

@admin_payment_router.get("/user/{user_id}")
async def get_user_payments(req: Request, res: Response):
    limit = int(req.query_params.get("limit", 15))
    offset = int(req.query_params.get("offset", 0))
    user_id = req.path_params.user_id
    payments = await Payment.query.filter(user_id=user_id).limit(limit).offset(offset)
    
    grouped_payments = {}
    
    for payment in payments:
        month = payment.get_date_for.strftime("%Y-%m")
        if month not in grouped_payments:
            grouped_payments[month] = []
        grouped_payments[month].append({
            "amount": payment.amount,
            "proof": payment.proof,
            "status": payment.status,
            "date_for": payment.date_for,
            "transaction_id": payment.transaction_id,
            "notes": payment.notes,
            "state": payment.status or "pending",
            "is_pending":True if payment.status != "approved"else False
        })
    
    return res.json(grouped_payments, status_code=200)


@admin_payment_router.post("/action/{id}")
async def approv_payments(req: Request, res: Response):
    obj_id = req.path_params.id
    obj = await Payment.get_or_none(id = obj_id)
    data = await req.json
    if not obj:
        return res.json({"error":"not found"},status_code=404)
    obj.status = data.get("state")
    obj.save()
    return res.json({"success":"True"})
