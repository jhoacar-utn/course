import "dotenv/config";

const express = {
  port: process.env.EXPRESS_PORT,
};

const sequelize = {
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialect: process.env.SEQUELIZE_DIALECT,
  storage: process.env.SQLITE_STORAGE,
};

export { express, sequelize };
