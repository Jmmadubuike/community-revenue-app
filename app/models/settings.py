from tortoise import fields
from tortoise.models import Model

class Settings(Model):
    bank_name = fields.CharField(max_length=255)
    bank_account = fields.CharField(max_length=255)
    payment_description = fields.TextField()
    important_note = fields.JSONField()
    account_number = fields.CharField(max_length=255, null=True)
   
    async def to_dict(self):
        return {
            "bankName":self.bank_name,
            "accountName":self.bank_account,
            "paymentDescription":self.payment_description,
            "important_note":self.important_note,
            "accountNumber":self.account_number
        }
    