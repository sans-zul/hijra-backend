require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEV_USERNAME || "postgres",
    "password": process.env.DEV_PASSWORD || "sans",
    "database": process.env.DEV_DATABASE || "sanari",
    "host": process.env.DEV_HOST || "localhost",
    "dialect": process.env.DEV_DIALECT || "postgres"
  },
  "test": {
    "username": process.env.TEST_USERNAME || "postgres",
    "password": process.env.TEST_PASSWORD || "sans",
    "database": process.env.TEST_DATABASE || "sanari",
    "host": process.env.TEST_HOST || "localhost",
    "dialect": process.env.TEST_DIALECT || "postgres"
  },
  "production": {
    "username": process.env.PRODUCTION_USERNAME || "postgres",
    "password": process.env.PRODUCTION_PASSWORD || "sans",
    "database": process.env.PRODUCTION_DATABASE || "sanari",
    "host": process.env.PRODUCTION_HOST || "localhost",
    "dialect": process.env.PRODUCTION_DIALECT || "postgres"
  }
}