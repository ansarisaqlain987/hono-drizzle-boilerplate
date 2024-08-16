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

<b>The boilerplate includes following:</b>
- Hono as framework
- Typescript
- Drizzle as ORM with PostgreSQL
- Knex as migration client

<b>Future enhancements:</b>
- ESLint Addition

___

## How To?

### Application setup:
```bash
# to install the dependency
bun install

# to start the application
bun dev
```

### Handling migrations:

```bash
# to create migration
# migration will be created in the '/src/db/migration' directory
bun migrate:make your_migration_name

# to update the db with migrations
bun migrate:latest

# to rollback previous migration
bun migrate:down
```
`NOTE: This boilerplate does not support rolling back each and every migrations with a single command`

### Drizzle Schemas
All the schemas are written in a single file for ease of convinience. Location of the schema file is `src/db/schema.ts`. These schema can be further customized or splitted into multiple files and folders according to the need. 


