from nexios.validator import Schema, fields, validate, EXCLUDE


class UserSchema(Schema):
    email = fields.Email(required=True, validate=validate.Length(max=50))
    first_name = fields.Str(required=True, validate=validate.Length(max=50))
    last_name = fields.Str(required=True, validate=validate.Length(max=50))
    date_of_birth = fields.Date(allow_none=True)
    country_of_residence = fields.Str(required=True, validate=validate.Length(max=50))
    quarter = fields.Str(required=True, validate=validate.Length(max=50))
    age_grade = fields.Str(required=True, validate=validate.Length(max=50))
    kindred = fields.Str(required=True, validate=validate.Length(max=50))
    gender = fields.Str(missing="unknown", validate=validate.Length(max=332))
    marital_status = fields.Str(missing="single", validate=validate.Length(max=332))
    level = fields.Str(missing="level_1", validate=validate.Length(max=320))
    phone = fields.Str(allow_none = True)

    class Meta:
        unknown = EXCLUDE


class UserUpdateSchema(Schema):
    email = fields.Email(required=False, validate=validate.Length(max=50))
    first_name = fields.Str(required=False, validate=validate.Length(max=50))
    last_name = fields.Str(required=False, validate=validate.Length(max=50))
    password = fields.Str(required=False, validate=validate.Length(min=6, max=50))
    date_of_birth = fields.Date(allow_none=True)
    country_of_residence = fields.Str(required=False, validate=validate.Length(max=50))
    quarter = fields.Str(required=False, validate=validate.Length(max=50))
    age_grade = fields.Str(required=False, validate=validate.Length(max=50))
    kindred = fields.Str(required=False, validate=validate.Length(max=50))
    is_active = fields.Boolean()
    gender = fields.Str(validate=validate.Length(max=332))
    marital_status = fields.Str(validate=validate.Length(max=332))
    level = fields.Str(validate=validate.Length(max=320))
    phone = fields.Str(allow_none = True)
    

    class Meta:
        unknown = EXCLUDE



