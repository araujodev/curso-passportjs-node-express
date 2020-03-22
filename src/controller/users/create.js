const User = require("./../../model/user")

module.exports = (req, res) => {
  return res.render("users/create", {
    user: new User()
  })
}
