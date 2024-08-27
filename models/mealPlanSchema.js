const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  date: { type: String, required: true },  
  recipe_id: { type: Number, required: true },
  mealType: { 
    type: String, 
    required: true,
    enum: ['breakfast', 'lunch', 'dinner', 'snack', 'dessert']
  },
  meal_id: { type: Number, required: true, unique:true }
});

const userMealsSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true }, 
  meals: [mealSchema]
});

const MealPlan = mongoose.model('MealPlan', userMealsSchema);

module.exports = MealPlan;