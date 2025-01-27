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

    class Meta:
        unknown = EXCLUDE


class UserUpdateSchema(Schema):
    email = fields.Email(required=False, validate=validate.Length(max=50))
    first_name = fields.Str(required=False, validate=validate.Length(max=50))
    last_name = fields.Str(required=False, validate=validate.Length(max=50))
    date_of_birth = fields.Date(allow_none=True)
    country_of_residence = fields.Str(required=False, validate=validate.Length(max=50))
    quarter = fields.Str(required=False, validate=validate.Length(max=50))
    age_grade = fields.Str(required=False, validate=validate.Length(max=50))
    kindred = fields.Str(required=False, validate=validate.Length(max=50))

    class Meta:
        unknown = EXCLUDE