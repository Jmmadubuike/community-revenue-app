from .base import BaseModel as Model, fields
from datetime import date

class Due(Model):
    name = fields.CharField(max_length=120)
    amount = fields.DecimalField(max_digits=10, decimal_places=2)
    deadline = fields.DateField()
    notes = fields.TextField(null = True)
    
    
    async def to_dict(self):
        return {
            "id":str(self.id),
            "name": self.name,
            "amount": str(self.amount),
            "deadline": self.deadline.isoformat(),
            "notes": self.notes,
            "date_creatd":self.created_at
        }
        
    def is_due(self):
        return self.deadline < date.today()