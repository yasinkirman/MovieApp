import AuthSchema from "../models/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { isEmail } from "../utils/isEmail.js";

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

    //email formatına uygun mu?
    if (!isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    //yeni kullanıcı olulştur
    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });

    //token oluştur
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    //register başarılı
    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //kayıtlı email var mı?
    const user = await AuthSchema.findOne(email);
    if (!user) {
      return res.status(401).json({ msg: "Invalid email" });
    }

    //şifre doğru mu?
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(401).json({ msg: "Wrong password" });
    }

    //token oluştur
    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    //login başarılı
    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

//email formatına uygun mu?
// function isEmail(emailAdress) {
//   let regex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (emailAdress.match(regex)) return true;
//   else return false;
// }

export default { register, login };
