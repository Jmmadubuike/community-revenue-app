from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "payments" ADD "name" VARCHAR(200);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "payments" DROP COLUMN "name";"""
