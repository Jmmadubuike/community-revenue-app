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
        
    @property
    def get_date_for(self):
        return self.date_for or self.created_at
    async def to_dict(self):
        user = await self.user
        data = {
            "id": self.id,  
            "amount": str(self.amount),  
            "proof": self.proof,
            "status": self.status,
            "date_for": self.date_for,
            "user":  user.to_dict(),  
            "transaction_id": self.transaction_id,
            "notes": self.notes,
            "date_created":self.created_at,
            "date_for":self.get_date_for.strftime("%Y-%m")
        }

       

        return data