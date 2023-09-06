import mysql from "mysql2/promise";
import { connection } from "../service/dataBase.mjs";
import { registerUser } from "../service/CRUD.mjs";
import { getAllUser } from "../service/CRUD.mjs";
import { getUserById } from "../service/CRUD.mjs";
import { updateUser } from "../service/CRUD.mjs";
import { deleteUserbyId } from "../service/CRUD.mjs";
export const handleHelloWord = (req, res) => {
  return res.send("kkk");
};
export const editUser = async (req, res) => {
  let user = req.params.id;
  let currentUser = await getUserById(user);
  // console.log("check current edit uuser data", currentUser);
  res.render("edit.ejs", { currentUser });
};
export const handleUsersPage = (req, res) => {
  return res.render("user.ejs");
};
export const showData = async (req, res) => {
  let users = await getAllUser();
  // console.log("check data ", users);

  res.render("tabledata.ejs", { listUser: users });
};
export const addNew = async (req, res) => {
  // console.log("check body", req.body);

  let email = req.body.email;
  let pass = req.body.pass;
  let userName = req.body.userName;
  await registerUser(email, pass, userName);
  // connection.query("select* from User", function (err, results, fields) {
  //   console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
  // });

  res.send("success");
};
export const update = async (req, res) => {
  let email = req.body.email;
  let pass = req.body.pass;
  let userName = req.body.userName;
  let id = req.body.id;
  // console.log(email, pass, userName, id);

  await updateUser(email, userName, pass, id);
  res.send("success");
};
export const getDeleteData = async (req, res) => {
  let user = req.params.id;
  let currentUser = await getUserById(user);
  // console.log("check current edit uuser data", currentUser);
  res.render("delete.ejs", { currentUser });
};
export const confirmDelte = async (req, res) => {
  let id = req.body.id;
  await deleteUserbyId(id);
  res.send("success");
};
