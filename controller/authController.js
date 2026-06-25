const {pool} = require("../db/pool")
const bcrypt = require('bcrypt');
const { body, validationResult } = require("express-validator");

const validateSignUp = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").isLength({min : 10}).withMessage("Password must be atleast 10 characters"),
  body("confirmpassword").custom((value, {req}) => {
    if(value !== req.body.password) {
      throw new Error("Passwords do not match")
    }
    return true;
  })
]

const signUpPost = async(req, res) => {
    try {
     const errors = validationResult(req);
     if(!error.isEmpty()) {
      return res.render("sign-up", {errors: errors.array()})
     }
     const hashedPassword = await bcrypt.hash(req.body.password, 10)
     await pool.query("INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4)", [req.body.firstname, req.body.secondname, req.body.email, hashedPassword])
     res.redirect("/")
    } catch (err) {
      console.error("Something went wrong", err)
    }
}

module.exports = { validateSignUp, signUpPost };