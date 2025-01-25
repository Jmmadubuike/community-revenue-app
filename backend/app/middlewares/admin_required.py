from nexios.http import Request, Response

async def admin_required(req :Request, res: Response,call_next):
    if not req.user:
        print("No User")
        return res.json({"auth":"UnAuthorized"},status_code=403)
    if not req.user.is_authenticated:
        print("NOt authent")
        return res.json({"auth":"UnAuthorized"},status_code=403)
    
    await call_next()