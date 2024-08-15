# Boilerplate: Hono + Typescript + Drizzle + Knex

## About
This is the code boilerplate including Hono framework. Knex migration, Drizzle ORM with PostgreSQL database. It is created to reduce the time taken to setup a new project. It has following features:
- First class support for Swagger documentation
- Logging for each request
- Unique request-id generation for each request
- Timing middleware for performance tracking
- First class typescript support
- Schema validator built on top of Zod
- CORS configuration
- CSRF and Rate limitter
- JWT inbuilt
- Drizzle ORM for handling database queries
- Knex migrations

___

## Components

The boilerplate includes following:
- Hono 
- Typescript
- Drizzle
- Knex

Future enhancements:
- ESLint Addition
- Multi-Database support

___

## How To?

### Application setup:
```gql
# to install the dependency
bun install

# to start the application
bun dev
```

### Handling migrations:

```gql
# to create migration
# migration will be created in the '/src/db/migration' directory
bun migrate:make your_migration_name

# to update the db with migrations
bun migrate:latest

# to rollback previous migration
bun migrate:down
```

