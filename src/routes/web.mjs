import express, { application } from "express";
import {
  getDeleteData,
  handleHelloWord,
} from "../controller/homeController.mjs";
import { handleUsersPage } from "../controller/homeController.mjs";
import { addNew } from "../controller/homeController.mjs";
import { showData } from "../controller/homeController.mjs";
import { editUser } from "../controller/homeController.mjs";
import { update } from "../controller/homeController.mjs";
import { confirmDelte } from "../controller/homeController.mjs";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", showData);
  router.get("/home/:id", editUser);
  router.get("/home", showData);
  router.get("/data_user", handleUsersPage);
  router.post("/data_user/create-User", addNew);
  router.post("/home/update-data_user", update);
  router.get("/home/delete/:id", getDeleteData);
  router.post("/home/delete/confirm-delete", confirmDelte);

  return app.use("/", router);
};
export default initWebRoutes;
