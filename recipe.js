'use strict';

function addIngredient(recipe, ingre, quantity){
  recipe[ingre]=quantity;
  return recipe;
}

function removeIngredient(recipe, ingre){
  delete recipe[ingre];
  return recipe;
}

function updateIngredient(recipe, ingre, quantity){
  recipe[ingre]=quantity;
  return recipe;
}

function readRecipe(recipe){
  if(Object.keys(recipe).length>0){
    for(var ingre in recipe){
      console.log("this recipe calls for "+recipe[ingre]+" of "+ingre);
    }
  }
}

readRecipe({chocolate: "16 oz"});

