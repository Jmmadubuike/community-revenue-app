from nexios.validator import Schema, fields, EXCLUDE

# filepath: /C:/Users/dunamix/Documents/community-revenue-app/app/schemas/due_schema.py

class DueSchema(Schema):
    name = fields.Str(required=True, validate=lambda x: len(x) <= 120)
    amount = fields.Decimal(required=True, as_string=True)
    deadline = fields.Date(required=True)
    notes = fields.Str()

    class Meta:
        unknown = EXCLUDE