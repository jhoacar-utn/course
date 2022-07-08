const { userModel } = require("../models");
const jwt = require("jsonwebtoken");

const { getHashedPassword } = require("../helpers/handlePassword");

exports.getUsers = async (req, res, next) => {
  const userData = await userModel.customFind();
  return res.json({ msg: "get user", userData });
};

exports.getAvatars = async (req, res, next) => {
  const avatars = await userModel.customFind();
  const avatar = avatars.map(({ avatar }) => avatar);
  return res.json({
    message: "Lista de avatars en la base de datos",
    body: avatar,
  });
};
exports.getProfile = async (req, res, next) => {
  const token = req.header("x-token");
  try {
    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.customFindOne(email);
    if (!user) {
      return res.status(401).json({
        msg: "Token no valido - usuarion no existe en BD",
      });
    }
    res.json({
      mensaje: "Perfil del usuario con toda su informacion",
      body: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        image: user.image,
      },
    });
  } catch (error) {
    res.status(400).json({ error: "Token incorrecto" });
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const avatarName = await userModel.customFindNameAvatar(userData.avatar);
    const email = await userModel.customFindEmail(userData.email);
    if (avatarName) {
      return res
        .status(401)
        .json({
          error: `El Personaje ${userData.avatar} ya se encuentra registrado`,
        });
    } else if (email) {
      return res
        .status(401)
        .json({
          error: `El emial ${userData.email} ya se encuentra registrado`,
        });
    }
    userData.password = await getHashedPassword(userData.password);
    const user = await userModel.customCreate(userData);
    res.json({ message: "Creado satisfactoriamente", body: user });
    next();
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ error: error });
  }
};

exports.putAvatar = async (req, res, next) => {
  try {
    const avatarFile = req.avatarPath;
    const userEmail = req.user.email;
    await userModel.customUpdate({ avatar: avatarFile }, { email: userEmail });
    return res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({ error: error });
  }
};
