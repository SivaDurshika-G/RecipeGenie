// Function to add a recipe dynamically
function addRecipe() {
  // Get values from input fields
  const name = document.getElementById("recipe-name").value;
  const ingredients = document.getElementById("ingredients").value;
  const method = document.getElementById("method").value;

  if (name && ingredients && method) {
    // Create a new recipe card
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    // Add content to the recipe card
    recipeCard.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Method:</strong> ${method}</p>
      <button onclick="removeRecipe(this)">Remove</button>
    `;

    // Append the recipe card to the recipe box
    document.querySelector(".recipe-box").appendChild(recipeCard);

    // Clear the input fields
    document.getElementById("recipe-name").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("method").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

// Function to remove a recipe
function removeRecipe(button) {
  const recipeCard = button.parentElement;
  recipeCard.remove();
}