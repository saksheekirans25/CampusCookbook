function toggleMenu() {
    var menu = document.getElementById("menuItems");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
var recipes = [
        {
            name: "Scrambled Eggs",
            ingredients: ["eggs", "butter", "salt", "pepper"]
        },
        {
            name: "Peanut Butter Banana Toast",
            ingredients: ["bread", "peanut butter", "banana"]
        },
        {
            name: "Greek Yogurt Parfait",
            ingredients: ["Greek yogurt", "berries", "granola"]
        }
    ];
    
    function searchRecipes() {
        var searchInput = document.getElementById("searchInput").value.toLowerCase();
        var recipes = document.querySelectorAll(".recipe h3"); // Select all recipe titles
        var filteredRecipes = [];

        recipes.forEach(function(recipe) {
            var recipeTitle = recipe.textContent.toLowerCase();
            if (recipeTitle.includes(searchInput)) {
                filteredRecipes.push(recipeTitle);
            }
        });

        var recipeContainer = document.getElementById("recipeContainer");
        if (recipeContainer) {
            recipeContainer.innerHTML = "Recipes containing '" + searchInput + "':<br>" + (filteredRecipes.length > 0 ? filteredRecipes.join("<br>") : "No recipes found.");
        } else {
            console.error("Recipe container not found.");
        }
    }
    
        // Display search results
        var recipeContainer = document.getElementById("recipeContainer");
        if (recipeContainer) {
            if (filteredRecipes.length > 0) {
                recipeContainer.innerHTML = "Recipes containing '" + searchInput + "':<br>" + filteredRecipes.join("<br>");
            } else {
                recipeContainer.innerHTML = "No recipes found containing '" + searchInput + "'.";
            }
        } else {
            console.error("Recipe container not found.");
        }
    
    