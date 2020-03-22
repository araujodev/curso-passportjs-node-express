const localStrategy = require("passport-local")

module.exports = passport => {
  passport.serializeUser((user, callback) => {
    return callback(null, user._id)
  })
}
