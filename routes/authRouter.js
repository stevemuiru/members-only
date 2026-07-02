const express = require("express")
const router = express.Router()

router.get('/sign-up', (req, res) => res.render('sign-up'))
router.get("/login", (req, res) => res.render("login"));

module.exports = router;
