from nexios.validator import Schema, fields,ValidationError,EXCLUDE

class PaymentSchema(Schema):
    amount = fields.Decimal(as_string=True,required = True)
    proof = fields.Str(allow_none=True,required=True)
    date_for = fields.Date(allow_none=True)
    notes = fields.Str(allow_none=True)


    class Meta:
        unknown =  EXCLUDE