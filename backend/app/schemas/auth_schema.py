from nexios.validator import Schema,fields,EXCLUDE

class AdminLoginSchema(Schema):

    email = fields.Email(required = True)
    password = fields.Str(required=True)


    class Meta:
        unkown = EXCLUDE