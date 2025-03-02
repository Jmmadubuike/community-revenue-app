from nexios.http import Request, Response
from nexios.routing import Router
from datetime import datetime, timedelta
from models import Users, Payment,Event
from middlewares.admin_required import admin_required

stats_routes = Router(prefix="/api/admin/stats")
stats_routes.add_middleware(admin_required)

async def get_user_stats():
    now = datetime.now()
    first_day_of_this_month = datetime(now.year, now.month, 1)
    first_day_of_last_month = first_day_of_this_month - timedelta(days=1)
    first_day_of_last_month = datetime(first_day_of_last_month.year, first_day_of_last_month.month, 1)

    total_users = await Users.all().count()

    last_month_users = await Users.filter(
        created_at__gte=first_day_of_last_month,
        created_at__lt=first_day_of_this_month
    ).count()

    this_month_users = await Users.filter(
        created_at__gte=first_day_of_this_month,
        created_at__lt=now
    ).count()

    if last_month_users == 0:
        percentage_change = 100 if total_users > 0 else 0
    else:
        percentage_change = ((this_month_users - last_month_users) / last_month_users) * 100

    return {
        "total_users": total_users,
        "this_month": this_month_users,
        "last_month": last_month_users,
        "percentage_change": round(percentage_change, 2),
        "trend": "rise" if this_month_users > last_month_users else "fall"
    }

async def get_payment_stats():
    now = datetime.now()
    first_day_of_this_month = datetime(now.year, now.month, 1)
    first_day_of_last_month = first_day_of_this_month - timedelta(days=1)
    first_day_of_last_month = datetime(first_day_of_last_month.year, first_day_of_last_month.month, 1)

    # Fetch payment amounts properly
    total_payment = sum(await Payment.filter(status = "approved").values_list("amount", flat=True))
    last_month_payment = sum(await Payment.filter(
        created_at__gte=first_day_of_last_month,
        created_at__lt=first_day_of_this_month
    ).values_list("amount", flat=True))

    this_month_payment = sum(await Payment.filter(
        created_at__gte=first_day_of_this_month,
        created_at__lt=now
    ).values_list("amount", flat=True))

    if last_month_payment == 0:
        percentage_change = 100 if this_month_payment > 0 else 0
    else:
        percentage_change = ((this_month_payment - last_month_payment) / last_month_payment) * 100

    return {
        "total_payment": total_payment or 0,
        "this_month": this_month_payment or 0,
        "last_month": last_month_payment or 0,
        "percentage_change": round(percentage_change, 2),
        "trend": "rise" if this_month_payment > last_month_payment else "fall"
    }
async def get_upcoming_event():
    events = await Event.latest("created_at").values()
    return events
    
@stats_routes.get("")
async def get_admin_stats(req: Request, res: Response):
    user_stats = await get_user_stats()
    payment_stats = await get_payment_stats()

    return res.json({
        "users": user_stats,
        "payments": payment_stats,
        "events":await get_upcoming_event()
    })
