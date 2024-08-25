const seed = require('./seed.js');
const recipeData = require('../data/dev/recipesData.json')
const ingredientsData = require('../data/dev/ingredientsData.json')
const userData = require('../data/dev/userData.json')
const mealPlanData = require('../data/dev/mealPlanData.json')
const clientPromise = require("../../connection");
const basketData =require("../data/dev/basketData.json")

const  runSeed = async() => {
  try{
    await seed({recipeData,ingredientsData,userData, mealPlanData, basketData})
    const client = await clientPromise
    await client.close();
  }catch(err){
    console.log('seed failed')
  }

}

runSeed();