import bcrypt from "bcryptjs";
import { registerUser } from "../service/CRUD.mjs";
const saltRounds = 10;

export const createNewUser = async (email, pass, userName) => {
  try {
    const hash = await bcrypt.hash(pass, saltRounds);
    await registerUser(email, hash, userName);

    console.log("Người dùng đã được đăng ký thành công!");
  } catch (err) {
    console.error("Lỗi:", err);
  }
};
