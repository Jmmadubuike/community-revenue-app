from nexios.http import Request, Response
from nexios.routing import Router
from models.dues import Due
from middlewares.admin_required import is_authenticated


user_due_router = Router("/api/user/dues")
user_due_router.add_middleware(is_authenticated)

@user_due_router.get("")
async def get_user_dues(req: Request, res: Response):
    user = req.user
    
    dues = await Due.all()
    dues_list = []
    
    for due in dues:
        dues_list.append({
            "id": str(due.id),
            "name": due.name,
            "amount": str(due.amount),
            "deadline": due.deadline.isoformat(),
            "notes": due.notes,
            "is_due": due.is_due()
        })
    
    return res.json({"data": dues_list, "status": "success"}, status_code=200)