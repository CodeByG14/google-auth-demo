require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

const app = express();

const sessionInfo = {
    secret: "slim_shady",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // Cookie expiration time
};

const corsInfo = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
};

app.use(session(sessionInfo));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsInfo));
app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0',() => console.log(`Listening on port ${port}...`));
