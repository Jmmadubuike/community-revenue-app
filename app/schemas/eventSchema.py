from nexios.validator import Schema, fields, EXCLUDE

class EventSchema(Schema):
    title = fields.Str(required=True, validate=lambda x: len(x) <= 120)
    venue = fields.Str(required=True)
    description = fields.Str(required=True)
    banner_url = fields.Str(allow_none=True)

    class Meta:
        unknown = EXCLUDE