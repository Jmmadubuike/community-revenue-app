from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "users" ADD "gender" VARCHAR(332) NOT NULL  DEFAULT 'unkown';
        ALTER TABLE "users" ADD "marital_status" VARCHAR(332) NOT NULL  DEFAULT 'single';
        ALTER TABLE "users" ADD "level" VARCHAR(320) NOT NULL  DEFAULT 'level_1';"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "users" DROP COLUMN "gender";
        ALTER TABLE "users" DROP COLUMN "marital_status";
        ALTER TABLE "users" DROP COLUMN "level";"""
