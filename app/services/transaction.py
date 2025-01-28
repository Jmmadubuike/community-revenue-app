import random
import string
import time
from hashlib import sha256

def generate_transaction_id():
    prefix = "TRN"

    timestamp = str(int(time.time() * 1000))  

    random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

    unique_hash = sha256((timestamp + random_string).encode()).hexdigest()[:8].upper()

    transaction_id = f"{prefix}-{timestamp[-6:]}-{random_string}-{unique_hash}"

    return transaction_id


