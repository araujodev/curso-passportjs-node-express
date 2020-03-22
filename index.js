const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const methodOverride = require("method-override")
const sessionExpress = require("express-session")
const passport = require("passport")
const mongoose = require("mongoose")
const path = require("path")
const app = express()

//Morgan log
app.use(morgan("dev"))

//BodyParser Config
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

//Method Override
app.use(methodOverride("_method"))

//Session Express Config
app.use(
  sessionExpress({
    secret: "@#DF@#$DF#@%#R#$",
    resave: false,
    saveUninitialized: true
  })
)

//Passport.js
app.use(passport.initialize())
app.use(passport.session())

//View Config
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "src/view"))

//Global Router
require("./src/index")(app)

//Mongooose Config
mongoose.connect("mongodb://localhost:27017/auth")
mongoose.Promise = global.Promise

//Server Start
app.listen(9000, () => {
  console.log("Express has been started")
})
