const { Router } = require("express");
const router = Router();
const abmCtrl = require("../controllers/" +
  process.env.DB_CONNECTION +
  "/abm.controller");
const authCtrl = require("../controllers/" +
  process.env.DB_CONNECTION +
  "/auth.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

// authorization routes
router.post("/auth/login", authCtrl.handleLogin);
router.post("/auth/register", abmCtrl.createUser);

// users routes
router.get("/users", abmCtrl.listUsers);
router.get("/user/avatar", abmCtrl.usedAvatars);
router.get("/user/profile", abmCtrl.loguedUser);

module.exports = router;
