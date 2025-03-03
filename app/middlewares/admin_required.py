from nexios.http import Request, Response
from nexios.auth.middleware import AuthenticationMiddleware 

async def admin_required(req :Request, res: Response,call_next):
    if not req.user:
        return res.json({"auth":"UnAuthorized"},status_code=403)
    if not req.user[0].is_authenticated:
        print("NOt authent")
        return res.json({"auth":"UnAuthorized"},status_code=403)
    if not req.user[0].is_admin:
        return res.json({"auth":"UnAuthorized"},status_code=403)

    
    await call_next()



async def is_authenticated(req :Request, res: Response,call_next):
    if not req.user[0]:
        return res.json({"auth":"UnAuthorized"},status_code=403)
    if not req.user[0].is_authenticated:
        return res.json({"auth":"UnAuthorized"},status_code=403)
    if  req.user[0].is_admin:
        print(9)
        return res.json({"auth":"UnAuthorized"},status_code=403)
        
    await call_next()