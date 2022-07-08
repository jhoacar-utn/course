const { userModel } = require("../models");
const { comparePassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");
const { setCookie } = require("../helpers/handleCookie");

exports.authLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.customFindOne(email);
    if (!user) {
      res.status(401);
      return res.json({ error: "User not registered" });
    }
    const isAuthorized = comparePassword(password, user.dataValues.password);
    if (!isAuthorized) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }
    const payload = {
      email: user.email,
      name: user.name,
    };
    const token = getJsonWebToken(payload);
    setCookie(req, token);
    res
      .status(201)
      .json({ message: "Logueado satisfactoriamente", body: { token: token }, user:{
        name: user.name,
        avatar: user.avatar,
        image: user.image,
        email: user.email
      } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
