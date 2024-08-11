const Router = require("express").Router();
const passport = require("passport");

Router.get("/login/success", (req,res)=>{
    if(req.user){
        res.status(200).json({
            error: false,
            message: "Successfully Logged in",
            user: req.user,
        });
    }else{
        res.status(403).json({
            error: true,
            message: "Not Authorized",
        });
    }
})

Router.get("/login/failed", (req,res)=>{
    res.status(401).json({
        error: true,
        message: "Log in failure"
    }) 
})

Router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,    
        failureRedirect: "/login/failed",
    })
);

Router.get(
    "/google",
    passport.authenticate("google", ["profile", "email"])
);

Router.get(
    "/logout", (req, res, next) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect(process.env.CLIENT_URL);
        });
    }
);

module.exports = Router