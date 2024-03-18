const mongoose = require('mongoose');

// Define schema for food recipes
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
