const User = require("./../../model/user")

module.exports = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/users")
    })
    .catch(error => {
      console.log("Ocorreu um erro ao remover o usuario, erro: " + error)
    })
}
