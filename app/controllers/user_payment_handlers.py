from nexios.http import Request, Response
from nexios.routing import Router
from models.payments import Payment
from schemas.paymentSchema import PaymentSchema,ValidationError
from middlewares.admin_required import is_authenticated
from services.transaction import generate_transaction_id

user_payment_router = Router("/api/user/payments")
user_payment_router.add_middleware(is_authenticated)
@user_payment_router.get("")
async def get_user_payments(req: Request, res: Response):
    user = req.user
    
    payments = await Payment.filter(user_id=user.id).all()
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


@user_payment_router.post("/new")
async def add_new_payment(req :Request, res :Response):
    user = req.user
    request_data = await req.json
    schema = PaymentSchema()
    try:
        validated_data = schema.load(request_data)

    except ValidationError as err:
        return res.json(err.messages,status_code=422)
    
    await Payment.create(
        **validated_data,
        user = user,
        transaction_id = generate_transaction_id(),
        status = "pending"
    )

    return res.json({"succes":True},status_code=201)