const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

// @route   POST api/auth/signup
// @desc    Register new user account
// @access  Public
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    //create new user and save
    const user = new User({ email, password });
    await user.save();

    //create JWT
    const token = jwt.sign({ userId: user._id }, "JWT_SECRET_KEY");

    res.send({ token });
  } catch (err) {
    res.status(422).send("Could Not Register User");
    console.log(err.message);
  }
});

// @route   POST api/auth/signin
// @desc    Signin user
// @access  Public
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Email and Password required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Invalid Credentials" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "JWT_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid Credentials" });
  }
});

module.exports = router;
