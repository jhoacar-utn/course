const express = require("express");
const router = express.Router();

const UseControllers = require("../controllers/userController");

router.get("/",UseControllers.getUsers);
router.post("/",UseControllers.postUser);

module.exports = router;