import "dotenv/config";
import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
export const connection = mysql.createPool({
  host: process.env.HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_BASE,
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true,
});
