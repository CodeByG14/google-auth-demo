require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport")
const app = express;


const sessionInfo = {
    name : "session",
    keys : ["slim_shady"],
    maxAge : 24 * 60 * 60 * 100,
}

const corsInfo = {
    origin : "https://localhost:3000",
    methods : "GET, POST, PUT DELETE",
    credentials : true
}


app.request(
    cookieSession(sessionInfo)
);

app.request(passport.initialize());
app.request(passport.session());

app.use(
    cors(corsInfo)
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))

