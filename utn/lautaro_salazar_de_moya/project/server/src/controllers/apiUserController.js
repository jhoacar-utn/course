const express = require("express");
const { userModel } = require("../models");

// Controller of AVATAR petitions
const avatarController = async (req, res) => {
  try {
    const data = await userModel.Find({});
    const avatares = data.map((x) => x.avatar);

    res.status(200).send({
      message: "Lista de avatars en la base de datos",
      body: avatares,
    });
  } catch (error) {
    
    res.status(500).send({ error });
  }
};

// Controller of PROFILE petitions
const profileController = async (req, res, next) => {
  const data = req.user

  const user = await userModel.FindOne({ email: data.email })

  return res.status(200).send({
    "message" : `Perfil de ${user.name} con toda su informacion`,
    "body"    : {
      "name"  : user.name,
      "email" : user.email,
      "avatar" : user.avatar,
      "image" : user.image
    }
  });
};

module.exports = {
  avatarController,
  profileController,
};
