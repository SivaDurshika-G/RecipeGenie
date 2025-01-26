// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Mock Data
const recipes = [
  { id: 1, name: "Spaghetti Carbonara", quick: true, vegetarian: false, instructions: "Boil pasta, mix eggs, cook bacon." },
  { id: 2, name: "Vegetable Stir Fry", quick: true, vegetarian: true, instructions: "Stir-fry veggies, add soy sauce." },
];

let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

// Display recipes
function displayRecipes(recipes) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <h3>${recipe.name}</h3>
      <p>${recipe.instructions}</p>
      <button onclick="saveRecipe('${recipe.name}')">Save</button>
      <button onclick="removeRecipe('${recipe.name}')">Remove</button>
    </div>
  `).join('');
}

// Save a recipe
function saveRecipe(name) {
  if (!savedRecipes.includes(name)) {
    savedRecipes.push(name);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    alert(`${name} saved!`);
    updateSavedRecipes();
  } else {
    alert(`${name} is already saved!`);
  }
}

// Remove a recipe
function removeRecipe(name) {
  const index = savedRecipes.indexOf(name);
  if (index !== -1) {
    savedRecipes.splice(index, 1);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    alert(`${name} removed!`);
    updateSavedRecipes();
  } else {
    alert(`${name} is not in the saved list!`);
  }
}

// Display saved recipes
function updateSavedRecipes() {
  const savedList = document.getElementById('saved-recipes-list');
  savedList.innerHTML = savedRecipes.map(recipe => `<li>${recipe}</li>`).join('');
}

document.getElementById('clear-saved').addEventListener('click', () => {
  savedRecipes = [];
  localStorage.removeItem('savedRecipes');
  alert('All saved recipes cleared!');
  updateSavedRecipes();
});

// Initialize
displayRecipes(recipes);
updateSavedRecipes();