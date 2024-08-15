
const DbConfig = {
  client: "postgresql",
  connection: Bun.env.PG_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};

const config = {
  development: DbConfig,
  staging: DbConfig,
  production: DbConfig
};

module.exports = config;
