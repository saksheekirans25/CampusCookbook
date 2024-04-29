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
    
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents form from submitting traditionally
        
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
        
            // Basic validation
            if (email.trim() === '' || password.trim() === '') {
                document.getElementById('errorMessage').textContent = 'Please fill in both fields.';
                return;
            }
        
            // Example: Send credentials to the server
            fetch('your-backend-endpoint/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Handle successful login
                    console.log('Login successful');
                    // Redirect to another page or update the UI accordingly
                } else {
                    // Show error message
                    document.getElementById('errorMessage').textContent = 'Invalid credentials.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
        