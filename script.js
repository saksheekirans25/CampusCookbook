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
        var filteredRecipes = [];
    
        recipes.forEach(function(recipe) {
            if (recipe.ingredients.includes(searchInput)) {
                filteredRecipes.push(recipe.name);
            }
        });
    
        if (filteredRecipes.length > 0) {
            document.getElementById("recipeContainer").innerHTML = "Recipes containing '" + searchInput + "':<br>" + filteredRecipes.join("<br>");
        } else {
            document.getElementById("recipeContainer").innerHTML = "No recipes found containing '" + searchInput + "'.";
        }
    }
    