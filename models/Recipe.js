const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  image: { type: String },
  source: { type: String },
  sourceUrl: { type: String },
  dietLabels: [{ type: String }],
  healthLabels: [{ type: String }],
  incredients: [{ type: String }],
  directions: [{ type: String }],
  calories: { types: String },
});

mongoose.model("Recipe", recipeSchema);
