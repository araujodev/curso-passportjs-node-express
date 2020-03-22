const express = require("express")
const router = express.Router()

module.exports = passport => {
  router.get("/", require("./all"))
  //router.post("/", require("./store"))
  router.post(
    "/",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/users"
    })
  )
  router.get("/create", require("./create"))
  router.delete("/:id", require("./destroy"))
  return router
}
