const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  image: { type: String },
  source: { type: String },
  sourceUrl: { type: String },
  dietLabels: [{ type: String }],
  healthLabels: [{ type: String }],
  ingredients: [{ type: String }],
  directions: [{ type: String }],
  calories: { type: String },
});

mongoose.model("Recipe", recipeSchema);
