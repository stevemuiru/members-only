const {pool} = require("../db/pool")

const signUpPost = async(req, res) => {
    try {
     await pool.query("INSERT INTO users(first_name, second_name, email, password, confirmpassword) VALUES($1, $2, $3, $4, $5)", [req.body.firstname, req.body.secondname, req.body.email, req.body.password, req.body.confirmpassword])
     res.redirect("/")
    } catch (err) {
      console.error("Something went wrong", err)
    }
}

module.exports = { signUpPost };