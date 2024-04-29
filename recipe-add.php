<?php

// Database connection parameters
$servername = "localhost"; // Change this to your database server
$username = "username"; // Change this to your database username
$password = "password"; // Change this to your database password
$dbname = "your_database"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $ingredients = $_POST["ingredients"];
    $instructions = $_POST["instructions"];
    
    // Upload image file
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);
    
    // Prepare SQL statement to insert data into database
    $sql = "INSERT INTO recipes (title, ingredients, instructions, image) VALUES ('$title', '$ingredients', '$instructions', '$target_file')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Recipe submitted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();

?>
