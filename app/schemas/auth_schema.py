from nexios.validator import Schema,fields,EXCLUDE

class AdminLoginSchema(Schema):

    email = fields.Email(required = True)
    password = fields.Str(required=True)


    class Meta:
        unknown = EXCLUDE


class UserLoginSchema(Schema):

    email = fields.Str(required = True)
    password = fields.Str(required=True)


    class Meta:
        unknown = EXCLUDE
