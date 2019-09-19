module.exports = {
  development: {
    username: "test",
    password: "test",
    database: "test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL'
  }
};