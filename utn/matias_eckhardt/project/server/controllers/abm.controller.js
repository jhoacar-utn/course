const abmCtrl = {};
const User = require("../models/User");
const { getHashedPassword } = require("../helpers/handlePassword");
const { token } = require("morgan");
const Decode = require("jwt-decode")


abmCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

abmCtrl.listUsers = async (req, res) => {
  const userList = await User.find();
  res.json(userList);
};



abmCtrl.loguedUser = async (req, res) => {
  try{

const  userToken  = req.query.token
const decodedToken = Decode(userToken);
const userData = await User.findOne({userMail: decodedToken.email})

  return res.status(201).json({ message: "User profile with all the data", body: userData  });
} catch (error) {
  return res.status(498).json({ error: "Token incorrecto"  });
}
};



abmCtrl.usedAvatars = async (req, res) => {
  const data = await User.find();
  const avatars = data.map(({userAvatar, userImage}) => ({userAvatar, userImage}));
  const message = { message: "This are the existing avatars in the db", body: avatars}
  res.json(message);
 };



abmCtrl.createUser = async (req, res, next) => {
  try {
    const userData = req.body;


    userData.userPassword = await getHashedPassword(userData.userPassword);

    const user = await User.create(userData);

    return res.status(201).json({ message: "User created Succesfully", body: userData  });
  } catch (error) {
    return res.status(409).json({ message: "User already registered, try with another email", error  });
  }
};


module.exports = abmCtrl;
