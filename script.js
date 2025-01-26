// List of 25 recipes with ingredients, method, and country of origin
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
        title: "Pad Thai",
        ingredients: ["Rice Noodles", "Shrimp", "Peanuts", "Egg", "Fish Sauce"],
        method: "Stir fry noodles with shrimp, add peanuts, and sauce.",
        country: "Thailand"
    },
    {
        title: "Fried Chicken",
        ingredients: ["Chicken", "Flour", "Buttermilk", "Paprika", "Salt"],
        method: "Coat chicken in flour and spices, deep fry until golden.",
        country: "United States"
    },
    {
        title: "Moussaka",
        ingredients: ["Eggplant", "Ground Beef", "Tomato Sauce", "Bechamel Sauce", "Cheese"],
        method: "Layer eggplant with beef and tomato sauce, top with béchamel and cheese.",
        country: "Greece"
    },
    {
        title: "Ramen",
        ingredients: ["Ramen Noodles", "Broth", "Pork Belly", "Egg", "Nori"],
        method: "Cook ramen noodles, serve with broth, pork belly, and boiled egg.",
        country: "Japan"
    },
    {
        title: "Fish and Chips",
        ingredients: ["Fish Fillets", "Potatoes", "Flour", "Beer", "Tartar Sauce"],
        method: "Coat fish in batter, deep fry, serve with fried potatoes.",
        country: "United Kingdom"
    },
    {
        title: "Shawarma",
        ingredients: ["Lamb", "Garlic", "Yogurt", "Spices", "Pita Bread"],
        method: "Marinate lamb in yogurt and spices, grill, serve in pita.",
        country: "Lebanon"
    },
    {
        title: "Ceviche",
        ingredients: ["Fish", "Lime", "Onion", "Cilantro", "Chili"],
        method: "Marinate fish in lime juice, mix with onions, cilantro, and chili.",
        country: "Peru"
    },
    {
        title: "Pho",
        ingredients: ["Beef", "Rice Noodles", "Herbs", "Broth", "Lime"],
        method: "Cook rice noodles, serve with beef and herbs in hot broth.",
        country: "Vietnam"
    },
    {
        title: "Biryani",
        ingredients: ["Rice", "Chicken", "Yogurt", "Spices", "Fried Onions"],
        method: "Layer rice with marinated chicken and spices, cook together.",
        country: "India"
    },
    {
        title: "Falafel",
        ingredients: ["Chickpeas", "Garlic", "Parsley", "Tahini", "Cumin"],
        method: "Blend chickpeas and spices, form balls, fry until crispy.",
        country: "Middle East"
    },
    {
        title: "Risotto",
        ingredients: ["Arborio Rice", "Chicken Broth", "Parmesan", "Mushrooms", "Garlic"],
        method: "Cook rice in broth, stir in cheese and mushrooms.",
        country: "Italy"
    },
    {
        title: "Chili Con Carne",
        ingredients: ["Ground Beef", "Beans", "Tomatoes", "Chili Powder", "Garlic"],
        method: "Cook beef with beans, tomatoes, and chili powder.",
        country: "United States"
    },
    {
        title: "Tiramisu",
        ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Cocoa Powder", "Sugar"],
        method: "Layer ladyfingers with mascarpone and coffee mixture, dust with cocoa.",
        country: "Italy"
    },
    {
        title: "Goulash",
        ingredients: ["Beef", "Paprika", "Onions", "Tomatoes", "Potatoes"],
        method: "Cook beef with onions and paprika, add tomatoes and potatoes.",
        country: "Hungary"
    },
    {
        title: "Baklava",
        ingredients: ["Phyllo Dough", "Nuts", "Honey", "Sugar", "Butter"],
        method: "Layer phyllo dough with nuts and honey, bake and cut into pieces.",
        country: "Turkey"
    },
    {
        title: "Pavlova",
        ingredients: ["Egg Whites", "Sugar", "Cream", "Fruits"],
        method: "Whisk egg whites with sugar, bake into a meringue, top with cream and fruits.",
        country: "New Zealand"
    },
    {
        title: "Empanada",
        ingredients: ["Dough", "Ground Beef", "Onion", "Olives", "Egg"],
        method: "Fill dough with beef mixture, fold and bake.",
        country: "Argentina"
    },
    {
        title: "Cheeseburger",
        ingredients: ["Ground Beef", "Cheese", "Lettuce", "Tomato", "Buns"],
        method: "Cook beef patty, place cheese on top, assemble with lettuce, tomato, and buns.",
        country: "United States"
    },
    {
        title: "Lasagna",
        ingredients: ["Pasta Sheets", "Ground Beef", "Tomato Sauce", "Cheese", "Béchamel Sauce"],
        method: "Layer pasta with beef, sauce, and cheese, bake until golden.",
        country: "Italy"
    },
    {
        title: "Jollof Rice",
        ingredients: ["Rice", "Tomatoes", "Onion", "Pepper", "Spices"],
        method: "Cook rice with a tomato-based sauce and spices.",
        country: "Nigeria"
    }
];

const recipeListElement = document.getElementById('recipe-list');

// Function to render recipe cards
function renderRecipes() {
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h2 class="recipe-title">${recipe.title}</h2>
            <p class="recipe-country">Famous in: ${recipe.country}</p>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="method">
                <h3>Cooking Method:</h3>
                <ul>
                    <li>${recipe.method}</li>
                </ul>
            </div>
            <button onclick="alert('Recipe Saved!')">Save Recipe</button>
        `;

        recipeListElement.appendChild(recipeCard);
    });
}

renderRecipes(); // Call the function to render recipes on page load