import AuthSchema from "../models/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    //kayıtlı email var mı?
    const user = await AuthSchema.findOne(email);
    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    //şifre 6 haneden kısa olmamalı
    if (passwords.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters" });
    }

    //password şifrele
    const passwordHash = await bcrypt.hash(password, 12);

    //email formatına uygun mu
    if (!isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    //yeni kullanıcı olulştur
    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
  } catch (error) {}
};

function isEmail(emailAdress) {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailAdress.match(regex)) return true;
  else return false;
}

export default { register, login };
