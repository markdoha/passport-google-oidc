const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc").Strategy;

passport.use(
  new GoogleStrategy({
    clientID: "YOUR_CLIENT_ID",
  }), () => {
    // Passport callback function
  }
);
