import bcrypt from "bcryptjs";
import passport from "passport";
import { validationResult } from "express-validator";
import User from "../models/User.js";

const loginUser = (req, res, next) => {
  try {
    let errors = validationResult(req);
    console.log('Inside login user', errors);
    if (!errors.isEmpty()) {
      const fieldErrors = [];
      errors.errors.forEach((item) => fieldErrors.push(item.msg));
      console.log('Returning with errors')
      return res.render("views/login", {
        errors: fieldErrors,
      });
    }
    passport.authenticate("local", {
      successRedirect: "/tasks",
      failureRedirect: "/login",
      failureFlash: true,
      successFlash: "You are successfully logged in",
    })(req, res, next);
  } catch (err) {
    console.log("Error is ", err);
  }
};

// Register Form POST
const registerUser = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    const fieldErrors = [];
    errors.errors.forEach((item) => fieldErrors.push(item.msg));
    return res.render("views/register", {
      errors: fieldErrors,
    });
  } else {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        req.flash("error_msg", "Email already exists.");
        res.redirect("register");
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.redirect("/login");
              })
              .catch((err) => {
                console.log(err);
                return;
              });
          });
        });
      }
    });
  }
};

// Logout User
const logOut = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/login");
};

export {
  loginUser,
  registerUser,
  logOut,
};
