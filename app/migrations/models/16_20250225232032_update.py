from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "users" ADD "phone" VARCHAR(15)   DEFAULT '';
        ALTER TABLE "users" ADD "idn" VARCHAR(15)   DEFAULT '';
        ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL;"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "users" DROP COLUMN "phone";
        ALTER TABLE "users" DROP COLUMN "idn";
        ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;"""
