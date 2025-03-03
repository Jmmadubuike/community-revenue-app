from nexios import MakeConfig
from tortoise import Tortoise as db

# Database Configurations

TEST_DB_CONFIG = {
    'connections': {
        'default': {
            'engine': 'tortoise.backends.asyncpg',
            'credentials': {
                'host': 'localhost',
                'port': 5432,
                'user': 'ogidiuser',
                'password': 'ogidi',
                'database': 'ogididb',
            }
        }
    },
    'apps': {
        'models': {
            'models': ["models", "aerich.models"],
            'default_connection': 'default',
        },
    },
}

PROD_DB_CONFIG = {
    'connections': {
        'default': {
            'engine': 'tortoise.backends.asyncpg',
            'credentials': {
                'host': 'ep-solitary-violet-a5ivl5ie-pooler.us-east-2.aws.neon.tech',
                'port': 5432,
                'user': 'neondb_owner',
                'password': 'npg_xqMY1v7cFKRf',
                'database': 'neondb',
                'ssl': True,  # Required for NeonDB
            }
        }
    },
    'apps': {
        'models': {
            'models': ["models", "aerich.models"],
            'default_connection': 'default',
        },
    },
}

# Select Environment
ENV = "prod"  # Change to "test" for local development

db_config = PROD_DB_CONFIG if ENV == "prod" else TEST_DB_CONFIG

# Nexios Config
nexios_config = MakeConfig({
    "port": 8000,
    "cors": {
        "allow_origins": ["*"],
        "allow_headers": ["*"]
    },
    "debug": True,
    "secret_key": "ogidistyle"
})

# Database Connection Functions
async def connect_db():
    await db.init(config=db_config)
    await db.generate_schemas()
    print("🗄️ Database connected successfully!")

async def close_db():
    await db.close_connections()
    print("🗄️ Database connection closed!")
