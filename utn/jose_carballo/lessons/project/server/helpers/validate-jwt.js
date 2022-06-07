const {userModel} = require('../models')
const jwt = require('jsonwebtoken');


const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la peticion",
    });
  }
  try {
    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.customFindOne(email);
    if (!user) {
      return res.status(401).json({
        msg: "Token no valido - usuarion no existe en BD",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token no valido" });
  }
};

module.exports = {
  validateJWT,
};
