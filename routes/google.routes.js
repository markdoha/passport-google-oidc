const Router = require("express").Router();
const authController = require("../controllers/auth.controller");

Router.get("/google", authController.google).get(
  "/google/callback",
  authController.googleCallback
);

Router.get("/logout", authController.logout);

Router.get("/facebook", authController.facebook).get(
  "/facebook/callback",
  authController.facebookCallback
);

export default Router;
