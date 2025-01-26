// Array of 25 recipes with ingredients, cooking method, and country
const recipes = [
  {
    name: "Pizza Margherita",
    ingredients: "Dough, Tomato Sauce, Mozzarella, Basil",
    method: "Preheat oven to 220°C. Roll dough, add sauce, cheese, and basil, bake for 10-15 minutes.",
    country: "Italy"
  },
  {
    name: "Sushi",
    ingredients: "Rice, Nori, Salmon, Wasabi, Soy Sauce",
    method: "Cook rice, cool, roll with nori, fish, and condiments. Slice into pieces.",
    country: "Japan"
  },
  {
    name: "Paella",
    ingredients: "Rice, Seafood, Chicken, Peas, Saffron",
    method: "Cook rice with saffron, sauté seafood and chicken, combine with rice, simmer.",
    country: "Spain"
  },
  {
    name: "Tacos",
    ingredients: "Tortillas, Ground Beef, Lettuce, Tomato, Cheese",
    method: "Cook ground beef, assemble in tortillas with toppings.",
    country: "Mexico"
  },
  {
    name: "Pasta Carbonara",
    ingredients: "Pasta, Eggs, Bacon, Parmesan",
    method: "Cook pasta, mix with eggs and crispy bacon, top with Parmesan.",
    country: "Italy"
  },
  {
    name: "Biryani",
    ingredients: "Rice, Chicken, Spices, Yogurt",
    method: "Cook rice and chicken with spices, combine layers and cook.",
    country: "India"
  },
  {
    name: "Fish and Chips",
    ingredients: "Fish Fillets, Potatoes, Flour, Oil",
    method: "Batter fish, fry with potatoes until crispy.",
    country: "United Kingdom"
  },
  {
    name: "Ramen",
    ingredients: "Noodles, Broth, Pork, Egg",
    method: "Cook noodles, add broth, pork, and boiled egg.",
    country: "Japan"
  },
  {
    name: "Falafel",
    ingredients: "Chickpeas, Garlic, Onion, Parsley, Spices",
    method: "Form chickpea mixture into balls, deep fry.",
    country: "Middle East"
  },
  {
    name: "Croissant",
    ingredients: "Flour, Butter, Yeast, Sugar",
    method: "Roll dough with butter, fold, proof, and bake.",
    country: "France"
  },
  {
    name: "Ceviche",
    ingredients: "Fish, Lime, Cilantro, Onion, Chile",
    method: "Marinate fish in lime juice with vegetables.",
    country: "Peru"
  },
  {
    name: "Shawarma",
    ingredients: "Lamb, Chicken, Garlic, Spices, Pita",
    method: "Cook meat on a spit, slice, and serve in pita with vegetables.",
    country: "Middle East"
  },
  {
    name: "Moussaka",
    ingredients: "Eggplant, Ground Beef, Tomato Sauce, Béchamel",
    method: "Layer fried eggplant, beef mixture, and béchamel, bake.",
    country: "Greece"
  },
  {
    name: "Dim Sum",
    ingredients: "Pork, Shrimp, Dough, Vegetables",
    method: "Stuff dough with filling, steam.",
    country: "China"
  },
  {
    name: "Hummus",
    ingredients: "Chickpeas, Tahini, Garlic, Lemon",
    method: "Blend chickpeas with tahini, garlic, and lemon juice.",
    country: "Middle East"
  },
  {
    name: "Kebab",
    ingredients: "Lamb, Beef, Spices, Onion, Pepper",
    method: "Grill skewered marinated meat and vegetables.",
    country: "Turkey"
  },
  {
    name: "Burger",
    ingredients: "Beef Patty, Bun, Lettuce, Tomato, Cheese",
    method: "Grill patty, assemble with toppings in a bun.",
    country: "USA"
  },
  {
    name: "Sauerbraten",
    ingredients: "Beef, Vinegar, Onion, Spices",
    method: "Marinate beef, braise in vinegar and spices.",
    country: "Germany"
  },
  {
    name: "Risotto",
    ingredients: "Rice, Chicken, Butter, Parmesan",
    method: "Cook rice in broth, add chicken and cheese.",
    country: "Italy"
  },
  {
    name: "Tempura",
    ingredients: "Shrimp, Vegetables, Flour, Egg, Oil",
    method: "Dip shrimp and vegetables in batter, deep fry.",
    country: "Japan"
  },
  {
    name: "Peking Duck",
    ingredients: "Duck, Hoisin Sauce, Pancakes, Cucumber",
    method: "Roast duck until crispy, serve with pancakes and sauce.",
    country: "China"
  },
  {
    name: "Ratatouille",
    ingredients: "Tomatoes, Eggplant, Zucchini, Peppers, Onion",
    method: "Sauté vegetables, bake with seasoning.",
    country: "France"
  },
  {
    name: "Churros",
    ingredients: "Flour, Sugar, Cinnamon, Butter",
    method: "Fry dough, roll in sugar and cinnamon.",
    country: "Spain"
  },
  {
    name: "Tom Yum Soup",
    ingredients: "Shrimp, Lemongrass, Lime Leaves, Chili, Mushrooms",
    method: "Boil shrimp with broth and spices, serve hot.",
    country: "Thailand"
  },
  {
    name: "Samosa",
    ingredients: "Potato, Peas, Spices, Dough",
    method: "Stuff dough with spiced potato and pea filling, fry.",
    country: "India"
  },
  {
    name: "Goulash",
    ingredients: "Beef, Paprika, Onion, Potatoes",
    method: "Simmer beef with paprika and potatoes until tender.",
    country: "Hungary"
  },
  {
    name: "Beef Wellington",
    ingredients: "Beef, Puff Pastry, Mushrooms, Prosciutto",
    method: "Wrap beef with mushrooms and pastry, bake.",
    country: "United Kingdom"
  },
  {
    name: "Pavlova",
    ingredients: "Egg Whites, Sugar, Fruit, Cream",
    method: "Whisk egg whites, bake meringue, top with fruit.",
    country: "Australia/New Zealand"
  }
];

// Function to display recipes dynamically
function displayRecipes() {
  const recipeBox = document.querySelector('.recipe-box');
  recipes.forEach(recipe => {
    
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
      <h2>${recipe.name}</h2>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Cooking Method:</strong> ${recipe.method}</p>
      <p><strong>Famous in:</strong> ${recipe.country}</p>
    `;

    // Append each recipe card to the recipe box
    recipeBox.appendChild(recipeCard);
}

// Run the display function on page load
window.onload = displayRecipes;