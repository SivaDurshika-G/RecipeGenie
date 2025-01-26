// Array of 25 recipes
const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: "Spaghetti, ground beef, onions, tomatoes, garlic, olive oil, spices",
    method: "Cook spaghetti. Brown the ground beef with onions and garlic. Add tomatoes and spices. Combine with spaghetti.",
    country: "Italy"
  },
  {
    name: "Sushi",
    ingredients: "Rice, seaweed, fish, vegetables, soy sauce",
    method: "Prepare sushi rice, roll with fish and vegetables in seaweed. Serve with soy sauce.",
    country: "Japan"
  },
  {
    name: "Tacos",
    ingredients: "Tortillas, ground beef, lettuce, tomatoes, cheese, salsa",
    method: "Cook beef, fill tortillas with toppings like lettuce, tomatoes, cheese, and salsa.",
    country: "Mexico"
  },
  {
    name: "Butter Chicken",
    ingredients: "Chicken, butter, cream, tomatoes, garlic, spices",
    method: "Cook chicken in butter, add cream and tomatoes, then simmer with spices.",
    country: "India"
  },
  {
    name: "Paella",
    ingredients: "Rice, seafood, chicken, vegetables, saffron",
    method: "Cook rice with chicken, seafood, and vegetables. Add saffron for flavor.",
    country: "Spain"
  },
  {
    name: "Pho",
    ingredients: "Beef, rice noodles, herbs, broth, lime",
    method: "Boil beef to make broth, serve with rice noodles, and garnish with herbs and lime.",
    country: "Vietnam"
  },
  {
    name: "Pizza",
    ingredients: "Dough, tomato sauce, cheese, pepperoni, vegetables",
    method: "Roll out dough, add sauce, cheese, and toppings, then bake.",
    country: "Italy"
  },
  {
    name: "Croissant",
    ingredients: "Flour, butter, yeast, sugar, salt",
    method: "Make dough, roll and fold with butter, bake until golden brown.",
    country: "France"
  },
  {
    name: "Peking Duck",
    ingredients: "Duck, hoisin sauce, pancakes, vegetables",
    method: "Roast duck until crispy, serve with hoisin sauce, pancakes, and vegetables.",
    country: "China"
  },
  {
    name: "Fish and Chips",
    ingredients: "Fish fillets, potatoes, flour, oil, salt",
    method: "Dip fish in batter and fry. Serve with fried potatoes.",
    country: "United Kingdom"
  },
  // Add more recipes up to 25
  // You can continue adding more recipes here...
];

// Function to display recipes
function displayRecipes() {
  const recipesContainer = document.getElementById('recipes');
  
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
      <h2>${recipe.name}</h2>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Cooking Method:</strong> ${recipe.method}</p>
      <p><strong>Famous in:</strong> ${recipe.country}</p>
    `;
    
    recipesContainer.appendChild(recipeCard);
  });
}

// Run the function to display recipes on page load
window.onload = displayRecipes;