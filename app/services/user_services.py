import random
import string

def generate_user_password():
    return ''.join(random.choices(string.digits, k=6))

async def send_user_email(req, res):
    email = req.state.email
    password = req.state.password
    if email:
        print("Email sent to", email)
        print("Pasword",password)
        
    