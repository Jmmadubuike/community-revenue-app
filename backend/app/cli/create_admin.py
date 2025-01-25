import asyncclick as click
from services.adminstration_manement import create_admin, Admins
from tortoise import Tortoise
from config import db_config

@click.command()
async def new_admin():
    email = click.prompt("Email")
    password = click.prompt("Password", hide_input=True)
    name = click.prompt("Name")

    await Tortoise.init(config=db_config)

    try:
        if await Admins.filter(email=email).exists():
            click.secho("Admin with this email already exists", fg="red")
            return

        await create_admin(email, password, name)
        click.secho("Admin created", fg="green")

    finally:
        await Tortoise.close_connections()
