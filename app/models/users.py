from .base import BaseModel,fields,BaseUserModel

class Users(BaseModel,BaseUserModel):
    password = fields.CharField(max_length=50)
    email = fields.CharField(max_length=50, null = True)
    first_name = fields.CharField(max_length=50)
    last_name = fields.CharField(max_length=50)
    date_of_birth = fields.DateField(null=True)
    country_of_residence = fields.CharField(max_length=50)
    quarter = fields.CharField(max_length=50)
    age_grade = fields.CharField(max_length=50)
    kindred = fields.CharField(max_length=50)
    is_active = fields.BooleanField(default = False)
    gender = fields.CharField(default = "unkown", max_length = 332)
    marital_status = fields.CharField(default = "single", max_length = 332)
    level  = fields.CharField(default = "level_1", max_length = 320)
    phone = fields.CharField(null = True, default = "", max_length = 15)
    idn = fields.CharField(null = True, default = "", max_length = 15)
    def __str__(self):
        return self.username

    def __repr__(self):
        return self.username

    def __unicode__(self):
        return self.username

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'date_of_birth': self.date_of_birth,
            'country_of_residence': self.country_of_residence,
            'quarter': self.quarter,
            'age_grade': self.age_grade,
            'kindred': self.kindred,
            'approved': self.is_active,
            'gender': self.gender,
            'marital_status': self.marital_status,
            'level': self.level,
            'phone': self.phone,
            'idn': self.idn,
            'username': self.username,
            'uid': self.uid,
            'is_authenticated': self.is_authenticated,
            'is_admin': self.is_admin
        }
    class Meta:
        order_by = ('username',)

    @classmethod
    def get_by_email(cls, email):
        return cls.query.get_obj(email=email)

    @classmethod
    def get_by_username(cls, username):
        return cls.query.get_obj(username=username)

    @classmethod
    def get_by_id(cls, user_id):
        return cls.query.get_obj(id=user_id)

    @classmethod
    def get_all(cls):
        return cls.query.all_data()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    @property
    def is_authenticated(self):
        return True
    @property
    def is_admin(self):
        return False
    
    @property
    def username(self):
        return f"{self.first_name}_{self.last_name}"
    

    
    @property
    def uid(self):
        return str(self.id)[:6]
        
        
   
    