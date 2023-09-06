import "dotenv/config";
import express from "express";
import initWebRoutes from "./src/routes/web.mjs";
import configViewEngine from "./src/config/viewEngine.mjs";
import bodyParser from "body-parser";
import { connection } from "./config/connectDb.mjs";

const app = express();
// JSON parsing
app.use(bodyParser.json());

// URL-encoded parsing
app.use(bodyParser.urlencoded({ extended: true }));
////test connection
connection();

///config view engine
configViewEngine(app);
//init webroutes
initWebRoutes(app);
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

app.listen(PORT, HOSTNAME, () => {
  console.log("jwt success", HOSTNAME, ":", PORT);
});
