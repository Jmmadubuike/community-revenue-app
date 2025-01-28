from nexios.http import Request, Response
from nexios.routing import Router
from models.payments import Payment

from middlewares.admin_required import is_authenticated

user_payment_router = Router("/api/user/payments")
user_payment_router.add_middleware(is_authenticated)
@user_payment_router.get("")
async def get_user_payments(req: Request, res: Response):
    user = req.user
    
    payments = await Payment.filter(user_id=user.id).all()
    grouped_payments = {}
    
    for payment in payments:
        month = payment.date_for.strftime("%Y-%m")
        if month not in grouped_payments:
            grouped_payments[month] = []
        grouped_payments[month].append({
            "amount": payment.amount,
            "proof": payment.proof,
            "status": payment.status,
            "date_for": payment.date_for,
            "transaction_id": payment.transaction_id,
            "notes": payment.notes
        })
    
    return res.json(grouped_payments, status_code=200)