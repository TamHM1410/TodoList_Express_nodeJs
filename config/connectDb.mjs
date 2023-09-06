import "dotenv/config";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_User,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,

    dialect: "mysql",
  }
);

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
