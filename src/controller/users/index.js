const express = require("express")
const router = express.Router()
const isAuth = require("./../../auth/middleware");

module.exports = passport => {
  router.get("/", isAuth, require("./all"))
  //router.post("/", require("./store"))
  router.post(
    "/",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/users"
    })
  )
  router.get("/create", isAuth, require("./create"))
  router.delete("/:id", isAuth, require("./destroy"))
  return router
}
