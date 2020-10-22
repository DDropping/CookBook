const mongoose = require("mongoose");
const express = require("express");

const authUserJwt = require("../middlewares/authUserJwt");
const Recipe = mongoose.model("Recipe");
const User = mongoose.model("User");

const router = express.Router();

// @route   POST api/recipes/createRecipe
// @desc    Create new recipe
// @access  protected
router.post("/create", authUserJwt, async (req, res) => {
  console.log("inside create recipe route");

  const {
    label,
    image,
    source,
    sourceUrl,
    dietLabels,
    healthLabels,
    ingrediants,
    directions,
    calories,
  } = req.body;

  if (!label) {
    return res.status(422).send({ error: "Missing required fields" });
  }

  let recipeFields = {};
  if (label) recipeFields.label = label;
  if (image) recipeFields.image = image;
  if (source) recipeFields.source = source;
  if (sourceUrl) recipeFields.sourceUrl = sourceUrl;
  if (dietLabels) recipeFields.dietLabels = dietLabels;
  if (healthLabels) recipeFields.healthLabels = healthLabels;
  if (ingrediants) recipeFields.ingrediants = ingrediants;
  if (directions) recipeFields.directions = directions;
  if (calories) recipeFields.calories = calories;

  try {
    const recipe = new Recipe(recipeFields);
    await recipe.save();

    const user = await User.findById(req.user.id);
    user.myRecipes.unshift(recipe._id);
    await user.save();

    res.send(recipe);
  } catch (err) {
    res.status(422).send(err.message);
  }
});

module.exports = router;
