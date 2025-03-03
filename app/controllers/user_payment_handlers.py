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
    user = req.user[0]
    limit = int(req.query_params.get("limit",15))
    offset = int(req.query_params.get("offset",0))
    payments =  await Payment.filter(user_id=user.id).all().limit(limit).offset(offset)
    list_of_payments = []
    for pays in   payments:
        list_of_payments.append(await pays.to_dict())
    return res.json(list_of_payments, status_code=200)


@user_payment_router.post("/new")
async def add_new_payment(req :Request, res :Response):
    user = req.user[0]
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