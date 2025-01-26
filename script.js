// Sample Recipes (Title, Ingredients, Method)
const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
        method: "Boil the pasta, cook pancetta, mix eggs and cheese, combine.",
        country: "Italy"
    },
    {
        title: "Vegetable Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Pepper", "Soy Sauce", "Ginger"],
        method: "Stir fry the vegetables, add soy sauce and ginger, cook for 5 minutes.",
        country: "China"
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Coconut Milk", "Curry Powder", "Onion", "Garlic"],
        method: "Cook chicken with spices, add coconut milk, simmer for 20 minutes.",
        country: "India"
    },
    {
        title: "Sushi",
        ingredients: ["Rice", "Nori (seaweed)", "Fish", "Soy Sauce", "Wasabi"],
        method: "Cook rice, spread over nori, add fish, roll, and slice.",
        country: "Japan"
    },
    {
        title: "Tacos",
        ingredients: ["Taco Shells", "Ground Beef", "Lettuce", "Tomato", "Cheese", "Sour Cream"],
        method: "Cook beef, fill taco shells with beef and toppings.",
        country: "Mexico"
    },
    {
        title: "Poutine",
        ingredients: ["Fries", "Cheese Curds", "Gravy"],
        method: "Cook fries, top with cheese curds, pour hot gravy over.",
        country: "Canada"
    },
    {
        title: "Paella",
        ingredients: ["Rice", "Seafood", "Saffron", "Peas", "Chicken", "Olives"],
        method: "Cook rice, add saffron, chicken, seafood, and peas, simmer.",
        country: "Spain"
    },
    {
        title: "Croissant",
        ingredients: ["Flour", "Butter", "Yeast", "Milk", "Sugar"],
        method: "Roll out dough, fold in butter, let rise, bake.",
        country: "France"
    },
    {
        title: "Bangers and Mash",
        ingredients: ["Sausages", "Mashed Potatoes", "Gravy"],
        method: "Cook sausages, mash potatoes, top with gravy.",
        country: "United Kingdom"
    },
    {
        title: "Kimchi",
        ingredients: ["Cabbage", "Garlic", "Ginger", "Chili Pepper", "Fish Sauce"],
        method: "Ferment cabbage with garlic, ginger, and chili pepper.",
        country: "South Korea"
    },
    {
        title: "Churros",
        ingredients: ["Flour", "Water", "Salt", "Sugar", "Cinnamon"],
        method: "Fry dough, coat with cinnamon and sugar.",
        country: "Spain"
    },
    {
        title: "Moussaka",
        ingredients: ["Eggplant", "Ground Lamb", "Tomato", "Onion", "Bechamel Sauce"],
        method: "Layer eggplant with lamb and tomato, top with bechamel sauce, bake.",
        country: "Greece"
    },
    {
        title: "Ramen",
        ingredients: ["Noodles", "Broth", "Pork", "Egg", "Vegetables"],
        method: "Prepare broth, cook noodles, assemble with toppings.",
        country: "Japan"
    },
    {
        title: "Falafel",
        ingredients: ["Chickpeas", "Onions", "Garlic", "Parsley", "Cumin"],
        method: "Blend ingredients, form balls, fry.",
        country: "Middle Eastern countries"
    },
    {
        title: "Banh Mi",
        ingredients: ["Baguette", "Pork", "Pickled Vegetables", "Cilantro", "Chili"],
        method: "Fill baguette with pork, pickled vegetables, and herbs.",
        country: "Vietnam"
    },
    {
        title: "Shakshuka",
        ingredients: ["Eggs", "Tomatoes", "Onions", "Peppers", "Spices"],
        method: "Cook tomatoes, onions, and peppers, crack eggs in the sauce, cook.",
        country: "Israel"
    },
    {
        title: "Pizza Margherita",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil", "Olive Oil"],
        method: "Top pizza dough with sauce, cheese, and basil, bake.",
        country: "Italy"
    },
    {
        title: "Fried Chicken",
        ingredients: ["Chicken", "Flour", "Eggs", "Spices", "Oil"],
        method: "Coat chicken with flour and spices, fry until crispy.",
        country: "United States"
    },
    {
        title: "Tiramisu",
        ingredients: ["Ladyfingers", "Mascarpone Cheese", "Coffee", "Cocoa Powder", "Eggs"],
        method: "Layer ladyfingers soaked in coffee with mascarpone, chill, and top with cocoa powder.",
        country: "Italy"
    },
    {
        title: "Tom Yum Soup",
        ingredients: ["Shrimp", "Lemongrass", "Lime Leaves", "Chili", "Mushrooms", "Fish Sauce"],
        method: "Boil shrimp and herbs, add mushrooms and fish sauce.",
        country: "Thailand"
    },
    {
        title: "Samosa",
        ingredients: ["Potatoes", "Peas", "Spices", "Pastry Shells"],
        method: "Stuff pastry shells with spiced potatoes and peas, deep fry.",
        country: "India"
    },
    {
        title: "Burrito",
        ingredients: ["Flour Tortilla", "Rice", "Beans", "Ground Beef", "Cheese", "Sour Cream"],
        method: "Fill tortilla with rice, beans, beef, and toppings, roll up.",
        country: "Mexico"
    },
    {
        title: "Beef Wellington",
        ingredients: ["Beef", "Mushrooms", "Puff Pastry", "Prosciutto", "Eggs"],
        method: "Sear beef, wrap in prosciutto and mushrooms, cover in pastry, bake.",
        country: "United Kingdom"
    },
    {
        title: "Babka",
        ingredients: ["Flour", "Eggs", "Sugar", "Cinnamon", "Chocolate"],
        method: "Knead dough, fill with cinnamon or chocolate, bake.",
        country: "Poland"
    },
    {
        title: "Pad Thai",
        ingredients: ["Rice Noodles", "Shrimp", "Tofu", "Peanuts", "Egg", "Tamarind Paste"],
        method: "Fry noodles with shrimp, tofu, and eggs, toss with tamarind sauce.",
        country: "Thailand"
    },
    {
        title: "Pavlova",
        ingredients: ["Egg Whites", "Sugar", "Vanilla", "Fruit"],
        method: "Whisk egg whites and sugar into a meringue, bake, top with fruit.",
        country: "New Zealand"
    },
    {
        title: "Biryani",
        ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
        method: "Layer marinated chicken with rice and spices, cook together.",
        country: "India"
    },
    {
        title: "Fish and Chips",
        ingredients: ["Fish", "Potatoes", "Flour", "Beer", "Spices"],
        method: "Batter fish and fry, serve with fries.",
        country: "United Kingdom"
    }
];

// Function to display the recipes
function displayRecipes(filteredRecipes) {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    recipeCardsContainer.innerHTML = ""; // Clear current recipes

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <h4>Ingredients:</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h4>Cooking Method:</h4>
            <p>${recipe.method}</p>
        `;
        recipeCardsContainer.appendChild(card);
    });
}

// Display all recipes initially
displayRecipes(recipes);