# Drop Registry API

## Getting Started

1. install [postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) and set up a local database

## Making Schema Changes

1. Make your changes to the model in the [schema file]("./prisma/schema.prisma")
1. Run your migrations with `npm run db:migrate:dev -- --name <yourMigrationName>`

### Related Docs
- [Concepts - Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## Available NPM Scripts

### `lint`

### `format`

### `test`

### `prisma:format`

### `db:migrate:dev`

### `db:reset`
