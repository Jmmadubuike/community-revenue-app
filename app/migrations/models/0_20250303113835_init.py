from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "admins" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(10) NOT NULL  DEFAULT 'admin'
);
COMMENT ON COLUMN "admins"."role" IS 'admin: admin\nsuperadmin: superadmin';
CREATE TABLE IF NOT EXISTS "due" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "name" VARCHAR(120) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "deadline" DATE NOT NULL,
    "notes" TEXT
);
CREATE TABLE IF NOT EXISTS "event" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "title" VARCHAR(120) NOT NULL,
    "venue" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT,
    "date" TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS "posts" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "media_urls" JSONB NOT NULL
);
CREATE TABLE IF NOT EXISTS "projects" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "status" VARCHAR(50) NOT NULL,
    "media_urls" JSONB NOT NULL
);
CREATE TABLE IF NOT EXISTS "settings" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "bank_name" VARCHAR(255) NOT NULL,
    "bank_account" VARCHAR(255) NOT NULL,
    "payment_description" TEXT NOT NULL,
    "important_note" JSONB NOT NULL,
    "account_number" VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS "users" (
    "id" UUID NOT NULL  PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ,
    "deleted" BOOL NOT NULL  DEFAULT False,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50),
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "date_of_birth" DATE,
    "country_of_residence" VARCHAR(50) NOT NULL,
    "quarter" VARCHAR(50) NOT NULL,
    "age_grade" VARCHAR(50) NOT NULL,
    "kindred" VARCHAR(50) NOT NULL,
    "is_active" BOOL NOT NULL  DEFAULT False,
    "gender" VARCHAR(332) NOT NULL  DEFAULT 'unkown',
    "marital_status" VARCHAR(332) NOT NULL  DEFAULT 'single',
    "level" VARCHAR(320) NOT NULL  DEFAULT 'level_1',
    "phone" VARCHAR(15)   DEFAULT '',
    "idn" VARCHAR(15)   DEFAULT ''
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
    "name" VARCHAR(200),
    "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """
