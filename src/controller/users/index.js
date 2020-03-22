const express = require("express")
const router = express.Router()

router.get("/", require("./all"))
router.post("/", require("./store"))
router.get("/create", require("./create"))
router.delete("/:id", require("./destroy"))

module.exports = router
