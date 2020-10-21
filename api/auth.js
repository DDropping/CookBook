const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

// @route   POST api/auth/signup
// @desc    Register new user account
// @access  Public
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });

    await user.save();
    res.send("post request to signup");
  } catch (err) {
    res.status(422).send("Could Not Register User");
    console.log(err.message);
  }
});

module.exports = router;
