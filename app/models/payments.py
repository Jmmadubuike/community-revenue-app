from .base import BaseModel as Model
from tortoise import fields


class Payment(Model):
    amount = fields.DecimalField(max_digits=160, decimal_places=2)
    proof = fields.CharField(null = True,max_length = 120)
    status = fields.CharField(max_length=20) 
    date_for = fields.DateField(null = True)
    user = fields.ForeignKeyField("models.Users",related_name="user_payments",on_delete=fields.CASCADE)
    transaction_id = fields.CharField(max_length = 120)
    notes = fields.CharField(null = True,max_length = 120)

    class Meta:
        table = "payments"