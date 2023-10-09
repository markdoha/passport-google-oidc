const Router = require("express").Router();
const passport = require("passport");
const passportSetup = require("../config/passport-setup");

Router.get(
  "/google",
  passport.authenticate('google', {
    scope: ["profile"],
  })
).get("/google/callback", (req, res) => {
  res.send("You reached the redirect URI");
});

Router.get("/logout");

Router.get("/facebook").get(
  "/facebook/callback",
);

module.exports = Router;
