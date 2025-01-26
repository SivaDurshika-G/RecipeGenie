const recipes = [
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
        instructions: "Boil the pasta, cook pancetta, mix eggs and cheese, combine.",
        isVegetarian: false,
        isQuick: true,
        rating: 4
    },
    {
        title: "Vegetable Stir Fry",
        description: "A healthy and quick vegetable stir-fry packed with flavors.",
        ingredients: ["Broccoli", "Carrots", "Bell Pepper", "Soy Sauce", "Ginger"],
        instructions: "Stir fry the vegetables, add soy sauce and ginger, cook for 5 minutes.",
        isVegetarian: true,
        isQuick: true,
        rating: 5
    },
    {
        title: "Chicken Curry",
        description: "A flavorful chicken curry with spices and coconut milk.",
        ingredients: ["Chicken", "Coconut Milk", "Curry Powder", "Onion", "Garlic"],
        instructions: "Cook chicken with spices, add coconut milk, simmer for 20 minutes.",
        isVegetarian: false,
        isQuick: false,
        rating: 3
    }
];

let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
let currentPage = 1;
const recipesPerPage = 2;

function displayRecipes() {
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const currentRecipes = recipes.slice(startIndex, endIndex);
    const recipeCardsContainer = document.getElementById('recipe-cards');
    recipeCardsContainer.innerHTML = "";

    currentRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button class="view-details" onclick="showRecipeDetails('${recipe.title}')">View Details</button>
            <button class="save-recipe" onclick="saveRecipe('${recipe.title}')">Save Recipe</button>
        `;
        recipeCardsContainer.appendChild(card);
    });

    document.getElementById('page-number').textContent = `Page ${currentPage}`;
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage * recipesPerPage >= recipes.length;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayRecipes();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage * recipesPerPage < recipes.length) {
        currentPage++;
        displayRecipes();
    }
});

// Search Functionality
document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchQuery));
    displayFilteredRecipes(filteredRecipes);
});

// Display Filtered Recipes based on Search
function displayFilteredRecipes(filteredRecipes) {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    recipeCardsContainer.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <button class="view-details" onclick="showRecipeDetails('${recipe.title}')">View Details</button>
            <button class="save-recipe" onclick="saveRecipe('${recipe.title}')">Save Recipe</button>
        `;
        recipeCardsContainer.appendChild(card);
    });
}

// Show Recipe Details in Modal
function showRecipeDetails(title) {
    const recipe = recipes.find(r => r.title === title);
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
    document.getElementById('recipe-ingredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    document.getElementById('recipe-instructions').textContent = recipe.instructions;

    // Display Rating Stars
    const ratingStars = document.querySelectorAll('#recipe-rating .rating');
    ratingStars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= recipe.rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });

    document.getElementById('recipe-modal').style.display = 'block';
}

// Close Recipe Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('recipe-modal').style.display = 'none';
});

// Save Recipe
function saveRecipe(title) {
    const recipe = recipes.find(r => r.title === title);
    if (!savedRecipes.includes(recipe)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        updateSavedRecipesList();
    }
}

// Update Saved Recipes List
function updateSavedRecipesList() {
    const savedRecipesList = document.getElementById('saved-recipes-list');
    savedRecipesList.innerHTML = "";
    savedRecipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.title;
        savedRecipesList.appendChild(listItem);
    });
}

// Clear Saved Recipes
document.getElementById('clear-saved-recipes').addEventListener('click', () => {
    savedRecipes = [];
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    updateSavedRecipesList();
});

displayRecipes();