const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");


const newStrategy = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:"/auth/google/callback",
    scope:["profile", "email"],
}

function profileDetails(accessToken, refershToken, profile, calllback){
    calllback(null,profile);
}

passport.use(
    new GoogleStrategy(newStrategy, profileDetails)
)

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})