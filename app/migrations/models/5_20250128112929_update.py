from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "event" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "title" VARCHAR(120) NOT NULL,
    "venue" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
        CREATE TABLE IF NOT EXISTS "payments" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "amount" DECIMAL(160,2) NOT NULL,
    "proof" VARCHAR(120),
    "status" VARCHAR(20) NOT NULL,
    "date_for" DATE,
    "transaction_id" VARCHAR(120) NOT NULL,
    "notes" VARCHAR(120),
    "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS "event";
        DROP TABLE IF EXISTS "payments";"""
