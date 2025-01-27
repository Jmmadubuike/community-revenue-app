from nexios import MakeConfig
from tortoise import Tortoise as db
db_config = {
    'connections': {
        'default': "postgres://ogidiuser:ogidi@localhost:5432/ogididb"
    },
    'apps': {
        'models': {
            'models': ["models","aerich.models"], #add aerich.models for aerich migrations
            'default_connection': 'default',
        },
    },
}


nexios_config = MakeConfig({
    "port" : 8000,
    "cors":{
        "allow_origins" : ["*"]
    },
    "debug" : True,
    "secret_key" :"ogidistyle"
})

async def connect_db():
    await db.init(config=db_config)
    await db.generate_schemas()
    print("🗄️ Database connected successfully!" )

async def close_db():
    await db.close_connections()
    print("🗄️ Database connection closed!" )