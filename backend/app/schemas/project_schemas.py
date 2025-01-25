from nexios.validator import Schema, fields, validate,EXCLUDE

class ProjectSchema(Schema):
    name = fields.Str(required=True, validate=validate.Length(max=255))
    description = fields.Str(required=True)
    start_date = fields.Date(required=True)
    end_date = fields.Date(allow_none=True)
    status = fields.Str(required=True, validate=validate.Length(max=50))
    media_urls = fields.List(fields.Url(), required=False, missing=[])
    
    class Meta:
        unknown = EXCLUDE 


class ProjectUpdateSchema(Schema):
    name = fields.Str(required=False, validate=validate.Length(max=255))
    description = fields.Str(required=False)
    start_date = fields.Date(required=False)
    end_date = fields.Date(allow_none=False)
    status = fields.Str(required=False, validate=validate.Length(max=50))
    media_urls = fields.List(fields.Url(), required=False, missing=[])
    
    class Meta:
        unknown = EXCLUDE