const express = require("express");
const { userModel } = require("../models");
const { encrypt, compare } = require("../helpers/handlePass");
const { tokenSign } = require("../helpers/handleJwt");

// Controller of register petitions
const registerController = async (req, res, next) => {
  try {
    const usrData = req.body;
    if (
      !usrData.name ||
      !usrData.email ||
      !usrData.password ||
      !usrData.avatar ||
      !usrData.image
    ) {
      return res.status(400).send({
        err: "some form field is empty",
      }).JSON
    }

    usrData.password = await encrypt(usrData.password);

    if (!usrData.avatar) {
      usrData.avatar = `Default_${usrData.email}`;
      usrData.image = `https://cutewallpaper.org/24/pokeball-icon-png/ball-cinema-movie-pokemon-pokeball-icon-download-on-iconfinder.png`;
    }

    const user = await userModel.Create(usrData, (err, docs) => {
      res.send({ usrData: docs });
    });

    return res.status(201).send({
      message: "Se ha creado su usuario",
      body: {
        name: user.name,
        createAt: user.createdAt,
      },
    });
  } catch (err) {
    return res.status(503).send({ err });
  }
};

// Controller of login petitions
const loginController = async (req, res, next) => {
  try {
    const usrData = req.body;

    const user = await userModel.FindOne({ email: usrData.email });

    if (!user) {
      return res.status(400).send({
        error: "Credenciales incorrectas",
      });
    }

    const correctPass = await compare(usrData.password, user.password);

    if (!correctPass) {
      return res.status(400).send({
        error: "Credenciales incorrectas",
      });
    }
    const payload = {
      name: user.name,
      email: user.email,
    };
    const token = await tokenSign(payload);

    return res.status(202).send({
      message: "Logueado satisfactoriamente",
      body: { token },
    });
  } catch (err) {
    console.log(err);
    return res.status(503).send({ err: error });
  }
};

module.exports = {
  registerController,
  loginController,
};
