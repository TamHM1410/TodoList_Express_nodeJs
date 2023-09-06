import { connection } from "./dataBase.mjs";
export const registerUser = (email, pass, userName) => {
  connection.query(`INSERT INTO Users(userName,pass,email) VALUES(?,?,?)`, [
    userName,
    pass,
    email,
  ]);
};
export const getAllUser = async () => {
  let [result, fields] = await connection.query("select*from Users");
  console.log("check result", result);

  return result;
};
export const getUserById = async (data_userId) => {
  let [result, fields] = await connection.query(
    "select*from Users where id=?",
    [data_userId]
  );
  let data_user = result && result.length > 0 ? result[0] : {};
  return data_user;
};
export const updateUser = async (email, userName, pass, id) => {
  let [result, fields] = await connection.query(
    "UPDATE Users SET email=?, userName=?, pass=? WHERE id=?",
    [email, userName, pass, id]
  );
  console.log(result);
  return result;
};
export const deleteUserbyId = async (data_userId) => {
  let [result, fields] = await connection.query(
    "DELETE FROM Users where id=?",
    [data_userId]
  );
  let data_user = result && result.length > 0 ? result[0] : {};
  return data_user;
};
